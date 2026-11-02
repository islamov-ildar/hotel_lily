import type { HotelData, MonthlyPrice } from '../hotelData'

export const parseData = (data: HotelData) => {
  const room = (prices: MonthlyPrice[]) => ({
    year: data.priceYear,
    pricesByMonths: prices.map((row) => ({
      month: row.month,
      price: row.price,
      ...(data.isSalesEnabled && data.salesMonths[row.month] ? { promotion: true } : {}),
    })),
  })
  return {
    isSalesEnabled: data.isSalesEnabled,
    year: data.priceYear,
    salesMonths: { ...data.salesMonths },
    salesText: { ...data.salesText },
    standard: room(data.standard),
    semiLuxurySeaView: room(data.semiLuxurySeaView),
    semiLuxuryFamily: room(data.semiLuxuryFamily),
  }
}
