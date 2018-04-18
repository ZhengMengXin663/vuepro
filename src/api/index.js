import ajax from './ajax'

export const reqMainData =()=> ajax('./api/index')

export const reqCarousel =()=> ajax('./api/carousel')

export const reqClassifyList =()=>ajax('./api/classify')
export const reqBrandList =()=>ajax('./api/brand')
