import spaCol1Image1 from '../assets/projects/spa-col1-1.jpg'
import spaCol1Image2 from '../assets/projects/spa-col1-2.jpg'
import spaCol2Image from '../assets/projects/spa-col2.jpg'
import nhaKhoaCol1Image1 from '../assets/projects/nk-col1-1.jpg'
import nhaKhoaCol1Image2 from '../assets/projects/nk-col1-2.jpg'
import nhaKhoaCol2Image from '../assets/projects/nk-col2.jpg'

export interface Project {
  number: string
  category: string
  name: string
  col1Image1: string
  col1Image2: string
  col2Image: string
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Nha Khoa',
    col1Image1: nhaKhoaCol1Image1,
    col1Image2: nhaKhoaCol1Image2,
    col2Image: nhaKhoaCol2Image,
  },
  {
    number: '03',
    category: 'Client',
    name: 'Spa',
    col1Image1: spaCol1Image1,
    col1Image2: spaCol1Image2,
    col2Image: spaCol2Image,
  },
]
