import type { InjectionKey, Ref } from 'vue'

export interface MonthlyPrice { month: string; price: number; promotion?: boolean }
export interface HotelData {
  isSalesEnabled: boolean
  priceYear: number
  salesMonths: Record<string, boolean>
  salesText: { main: string; additional: string }
  standard: MonthlyPrice[]
  semiLuxurySeaView: MonthlyPrice[]
  semiLuxuryFamily: MonthlyPrice[]
}

export const hotelDataKey: InjectionKey<Ref<HotelData | undefined>> = Symbol('hotelData')
export const hotelDataUrl = 'https://hotel-lily-default-rtdb.firebaseio.com/allData.json'

export function validateHotelData(value: unknown): asserts value is HotelData {
  const data = value as HotelData | null
  if (!data || !Number.isInteger(data.priceYear) || typeof data.isSalesEnabled !== 'boolean' ||
      !data.salesMonths || typeof data.salesMonths !== 'object' ||
      Object.values(data.salesMonths).some((value) => typeof value !== 'boolean') || typeof data.salesText?.main !== 'string' ||
      typeof data.salesText?.additional !== 'string') {
    throw new Error('Firebase: invalid hotel data. Publication cancelled.')
  }
  for (const key of ['standard', 'semiLuxurySeaView', 'semiLuxuryFamily'] as const) {
    if (!Array.isArray(data[key]) || data[key].length === 0 || data[key].some((row) =>
      !row || !['april', 'may', 'june', 'july', 'august', 'september', 'october'].includes(row.month) ||
      !Number.isFinite(row.price) || row.price < 0)) {
      throw new Error(`Firebase: invalid prices in ${key}. Publication cancelled.`)
    }
  }
}

export async function fetchHotelData(): Promise<HotelData> {
  const response = await fetch(hotelDataUrl, { cache: 'no-store', signal: AbortSignal.timeout(15000) })
  if (!response.ok) throw new Error(`Firebase request failed: HTTP ${response.status}`)
  const data: unknown = await response.json()
  validateHotelData(data)
  return data
}
