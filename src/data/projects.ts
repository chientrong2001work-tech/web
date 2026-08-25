import spaCol1Image1 from '../assets/projects/spa-col1-1.jpg'
import spaCol1Image2 from '../assets/projects/spa-col1-2.jpg'
import spaCol2Image from '../assets/projects/spa-col2.jpg'
import nhaKhoaRangSu from '../assets/projects/nk-col1-1.jpg'
import nhaKhoaKhamRangMienPhi from '../assets/projects/nk-col1-2.jpg'
import nhaKhoaNuCuoiToaSang from '../assets/projects/nk-col2.jpg'
import nhaHangDrink from '../assets/projects/nh-col1-1.jpg'
import nhaHangRestaurantConcept from '../assets/projects/nh-col1-2.jpg'
import nhaHangKhaiTruong from '../assets/projects/nh-col2.jpg'

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
    name: 'Nhà Hàng',
    col1Image1: nhaHangDrink,
    col1Image2: nhaHangRestaurantConcept,
    col2Image: nhaHangKhaiTruong,
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Nha Khoa',
    col1Image1: nhaKhoaNuCuoiToaSang,
    col1Image2: nhaKhoaRangSu,
    col2Image: nhaKhoaKhamRangMienPhi,
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
