import hotelVideo from '@/assets/videos/hotel-lily.mp4'

export { hotelVideo }
const ready = new Map<string, string>()
const pending = new Map<string, AbortController>()
const opened = new Set<string>()

type NetworkInformation = { saveData?: boolean; effectiveType?: string }

// Use a completed download directly. Never restart playback when a warmup finishes.
export function videoSourceForPlayback(url: string): string {
  opened.add(url)
  pending.get(url)?.abort()
  return ready.get(url) ?? url
}

export function scheduleVideoWarmup(url: string): () => void {
  let timer: number | undefined
  let idle: number | undefined
  let controller: AbortController | undefined
  let cancelled = false

  const start = async () => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
    if (cancelled || document.visibilityState === 'hidden' || ready.has(url) || pending.has(url) || opened.has(url) ||
      connection?.saveData || ['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? '')) return
    controller = new AbortController()
    pending.set(url, controller)
    try {
      const options: RequestInit & { priority: 'low' } = { signal: controller.signal, priority: 'low' }
      const response = await fetch(url, options)
      if (!response.ok) return
      const blob = await response.blob()
      if (!controller.signal.aborted && !opened.has(url)) ready.set(url, URL.createObjectURL(blob))
    } catch {
      // Background loading is optional. Playback can stream the original URL.
    } finally {
      if (pending.get(url) === controller) pending.delete(url)
    }
  }

  const afterLoad = () => {
    timer = window.setTimeout(() => {
      if (typeof window.requestIdleCallback === 'function') {
        idle = window.requestIdleCallback(() => { void start() })
      } else {
        void start()
      }
    }, 2000)
  }
  if (document.readyState === 'complete') afterLoad()
  else window.addEventListener('load', afterLoad, { once: true })

  return () => {
    cancelled = true
    window.removeEventListener('load', afterLoad)
    window.clearTimeout(timer)
    if (idle !== undefined) window.cancelIdleCallback(idle)
    controller?.abort()
  }
}
