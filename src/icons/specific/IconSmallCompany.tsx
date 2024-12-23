import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconSmallCompany = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 63}
        height={height || 70}
        viewBox={viewBox || '0 0 57 57'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={primary.main}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.125 49.875V5.34375C7.125 4.3605 7.92122 3.5625 8.90625 3.5625H30.2812C31.2645 3.5625 32.0625 4.3605 32.0625 5.34375V14.25H48.0938C49.077 14.25 49.875 15.048 49.875 16.0312V49.875H51.6562C52.6377 49.875 53.4375 50.673 53.4375 51.6562C53.4375 52.6395 52.6377 53.4375 51.6562 53.4375H5.34375C4.3605 53.4375 3.5625 52.6395 3.5625 51.6562C3.5625 50.673 4.3605 49.875 5.34375 49.875H7.125ZM28.5 49.875V7.125H10.6875V49.875H14.2447V40.9688C14.2447 39.9855 15.0427 39.1875 16.0259 39.1875H23.1509C24.1342 39.1875 24.9322 39.9855 24.9322 40.9688V49.875H28.5ZM17.8072 42.75V49.875H21.3697V42.75H17.8072ZM32.0625 17.8125V49.875H46.3125V17.8125H32.0625ZM37.4009 46.3125H40.9634C41.9467 46.3125 42.7447 45.5145 42.7447 44.5312C42.7447 43.548 41.9467 42.75 40.9634 42.75H37.4009C36.4177 42.75 35.6197 43.548 35.6197 44.5312C35.6197 45.5145 36.4177 46.3125 37.4009 46.3125ZM37.4009 39.1875H40.9634C41.9467 39.1875 42.7447 38.3895 42.7447 37.4062C42.7447 36.423 41.9467 35.625 40.9634 35.625H37.4009C36.4177 35.625 35.6197 36.423 35.6197 37.4062C35.6197 38.3895 36.4177 39.1875 37.4009 39.1875ZM16.0259 35.625H23.1509C24.1342 35.625 24.9322 34.827 24.9322 33.8438C24.9322 32.8605 24.1342 32.0625 23.1509 32.0625H16.0259C15.0427 32.0625 14.2447 32.8605 14.2447 33.8438C14.2447 34.827 15.0427 35.625 16.0259 35.625ZM37.4009 32.0625H40.9634C41.9467 32.0625 42.7447 31.2645 42.7447 30.2812C42.7447 29.298 41.9467 28.5 40.9634 28.5H37.4009C36.4177 28.5 35.6197 29.298 35.6197 30.2812C35.6197 31.2645 36.4177 32.0625 37.4009 32.0625ZM16.0259 28.5H23.1509C24.1342 28.5 24.9322 27.702 24.9322 26.7188C24.9322 25.7355 24.1342 24.9375 23.1509 24.9375H16.0259C15.0427 24.9375 14.2447 25.7355 14.2447 26.7188C14.2447 27.702 15.0427 28.5 16.0259 28.5ZM37.4009 24.9375H40.9634C41.9467 24.9375 42.7447 24.1395 42.7447 23.1562C42.7447 22.173 41.9467 21.375 40.9634 21.375H37.4009C36.4177 21.375 35.6197 22.173 35.6197 23.1562C35.6197 24.1395 36.4177 24.9375 37.4009 24.9375ZM16.0259 21.375H23.1509C24.1342 21.375 24.9322 20.577 24.9322 19.5938C24.9322 18.6105 24.1342 17.8125 23.1509 17.8125H16.0259C15.0427 17.8125 14.2447 18.6105 14.2447 19.5938C14.2447 20.577 15.0427 21.375 16.0259 21.375ZM23.1509 10.6875C24.1342 10.6875 24.9322 11.4855 24.9322 12.4688C24.9322 13.452 24.1342 14.25 23.1509 14.25H16.0259H15.9636L15.9083 14.2464L15.8513 14.2411L15.7961 14.2357L15.7391 14.2268L15.6857 14.2179L15.6198 14.2037L15.5592 14.1876L15.4969 14.1698L15.4345 14.1503L15.3829 14.1307L15.333 14.1093L15.2831 14.0879L15.235 14.0647L15.1869 14.0398L15.1388 14.0149L15.0925 13.9864L15.048 13.9579L15.0035 13.9276L14.9607 13.8955L14.918 13.8635L14.8681 13.8225L14.82 13.7797L14.7737 13.7352L14.7292 13.6907L14.6829 13.639L14.6419 13.5909L14.6027 13.5393L14.5653 13.4876L14.535 13.4449L14.5065 13.3985L14.4798 13.3522L14.4531 13.3059L14.4281 13.2578L14.4014 13.199L14.3747 13.1385L14.3515 13.0761L14.3319 13.0191L14.3124 12.9568L14.2981 12.9034L14.2856 12.8499L14.2749 12.7947L14.266 12.7395L14.2571 12.6843L14.2518 12.6291L14.2482 12.5721L14.2447 12.515V12.4527L14.2464 12.3957L14.25 12.3405L14.2536 12.2853L14.2571 12.2532C14.364 11.3715 15.1157 10.6875 16.0259 10.6875H23.1509Z'
        />
    </svg>
)