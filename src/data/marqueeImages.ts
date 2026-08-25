import mq1 from '../assets/marquee/mq1.jpg'
import mq2 from '../assets/marquee/mq2.jpg'
import mq3 from '../assets/marquee/mq3.jpg'
import mq4Webm from '../assets/marquee/mq4.webm'
import mq4Mp4 from '../assets/marquee/mq4.mp4'

export interface MarqueeItem {
  type: 'image' | 'video'
  src: string
  webmSrc?: string
}

const image = (src: string): MarqueeItem => ({ type: 'image', src })
const video = (src: string, webmSrc?: string): MarqueeItem => ({
  type: 'video',
  src,
  webmSrc,
})

export const MARQUEE_ITEMS: MarqueeItem[] = [
  image('https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif'),
  image(mq1),
  image(mq2),
  image('https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif'),
  image('https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif'),
  image('https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif'),
  image('https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif'),
  image('https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif'),
  image('https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif'),
  image('https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif'),
  image('https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif'),
  image('https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif'),
  image(mq3),
  video(mq4Mp4, mq4Webm),
  image('https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif'),
  image('https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif'),
  image('https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif'),
  image('https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif'),
  image('https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif'),
  image('https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif'),
  image('https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif'),
]

export const ROW_1_ITEMS = MARQUEE_ITEMS.slice(0, 11)
export const ROW_2_ITEMS = MARQUEE_ITEMS.slice(11)
