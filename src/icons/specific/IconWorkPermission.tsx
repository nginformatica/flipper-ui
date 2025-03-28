import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconWorkPermission = ({
    card,
    color,
    width,
    height,
    opacity,
    viewBox
}: IIconProps) => {
    return card ? (
        <svg
            fill='none'
            width={width || '120'}
            height={height || '125'}
            viewBox={viewBox || '0 0 120 125'}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                fill={color || primary.main}
                fill-opacity={opacity || '0.1'}
                d='M24.5449 96.5662L16.2114 99.8265C14.8225 100.251 13.2435 99.8265 12.4833 98.4815L0.363138 78.1009C-0.32401 76.8729 -0.0169863 75.2208 1.12339 74.3582L13.9307 64.665C13.609 62.8229 13.4921 60.8053 13.4921 58.9047C13.4921 57.004 13.7406 54.9718 14.0622 53.1443L1.25497 43.4511C-0.00236628 42.5886 -0.265529 40.995 0.49472 39.7084L12.5417 19.3279C13.302 17.9828 14.881 17.4857 16.2699 17.9828L31.3433 23.8747C34.4281 21.6086 37.8346 19.5764 41.5628 18.0998L43.8289 2.51467C44.0774 1.03803 45.2763 0 46.7968 0H71.0224C72.5429 0 73.8003 1.03803 74.0488 2.51467L76.3149 18.0998C80.0431 19.5764 83.3765 21.5355 86.5344 23.8747L101.608 17.9828C102.997 17.5588 104.576 17.9828 105.336 19.3279L117.456 39.7084C118.143 40.9365 117.836 42.5886 116.696 43.4511L103.889 53.1443C103.962 53.5537 104.02 53.9631 104.079 54.387C103.523 54.7818 102.982 55.235 102.485 55.7467L92.865 65.4545C93.479 62.8814 93.8007 60.2059 93.8007 57.4427C93.8007 38.2756 78.274 22.749 59.107 22.749C39.9399 22.749 24.4133 38.2756 24.4133 57.4427C24.4133 66.1124 27.6005 74.0512 32.8638 80.1332C30.9193 80.718 29.1503 81.7706 27.659 83.2765C25.2759 85.6888 24.0478 88.8029 23.9601 92.1656C23.9162 93.6861 24.1209 95.1773 24.5595 96.5809L24.5449 96.5662ZM60.4813 104.344L42.63 86.3321C41.0218 84.7093 38.9604 83.9344 36.6943 83.9344C34.4135 83.9344 32.3667 84.7093 30.7585 86.3321C29.1503 87.9549 28.39 90.0164 28.3169 92.2679C28.2584 94.5633 28.9894 96.7417 30.6123 98.3791L54.5455 122.532C55.3642 123.35 56.3292 124.008 57.4257 124.403C58.4052 124.754 59.4433 124.929 60.4959 124.929C61.5339 124.929 62.572 124.754 63.5515 124.403C64.648 124.008 65.613 123.35 66.4317 122.532L117.632 70.8493C119.254 69.2119 120 67.1066 120 64.8112C120 62.5158 119.269 60.4252 117.632 58.7877C116.009 57.1502 113.918 56.39 111.623 56.39C109.327 56.39 107.237 57.1502 105.614 58.7877L60.4959 104.33L60.4813 104.344Z'
            />
        </svg>
    ) : (
        <svg
            fill='none'
            width={width || 24}
            height={height || 24}
            viewBox={viewBox || '0 0 38 38'}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={color || primary.main}
                d='M7.42795 29.2235L4.90601 30.2102C4.48568 30.3385 4.00784 30.2102 3.77777 29.8031L0.109895 23.6354C-0.0980541 23.2638 -0.0051405 22.7638 0.339967 22.5028L4.21579 19.5694C4.11845 19.0119 4.08306 18.4013 4.08306 17.8261C4.08306 17.251 4.15827 16.636 4.25561 16.0829L0.379787 13.1495C-0.0007161 12.8884 -0.0803563 12.4062 0.149715 12.0168L3.79547 5.84913C4.02554 5.44208 4.50338 5.29165 4.9237 5.44208L9.48532 7.22514C10.4189 6.53935 11.4498 5.92435 12.578 5.47748L13.2638 0.761006C13.339 0.314136 13.7018 0 14.162 0H21.4933C21.9534 0 22.3339 0.314136 22.4092 0.761006L23.0949 5.47748C24.2232 5.92435 25.232 6.51722 26.1876 7.22514L30.7493 5.44208C31.1696 5.31377 31.6474 5.44208 31.8775 5.84913L35.5454 12.0168C35.7533 12.3885 35.6604 12.8884 35.3153 13.1495L31.4395 16.0829C31.4616 16.2068 31.4793 16.3307 31.497 16.459C31.3289 16.5784 31.1652 16.7156 31.0147 16.8705L28.1034 19.8083C28.2893 19.0296 28.3866 18.2199 28.3866 17.3837C28.3866 11.5832 23.6878 6.88445 17.8874 6.88445C12.0869 6.88445 7.38813 11.5832 7.38813 17.3837C7.38813 20.0074 8.35266 22.4099 9.94546 24.2504C9.35701 24.4274 8.82165 24.746 8.37035 25.2017C7.64917 25.9317 7.27751 26.8741 7.25097 27.8918C7.23769 28.3519 7.29964 28.8032 7.43237 29.228L7.42795 29.2235ZM18.3033 31.5773L12.901 26.1264C12.4143 25.6353 11.7905 25.4008 11.1047 25.4008C10.4145 25.4008 9.79503 25.6353 9.30834 26.1264C8.82165 26.6175 8.59158 27.2414 8.56946 27.9227C8.55176 28.6174 8.77298 29.2766 9.2641 29.7722L16.5069 37.0814C16.7547 37.3291 17.0467 37.5282 17.3785 37.6477C17.675 37.7539 17.9891 37.807 18.3077 37.807C18.6218 37.807 18.936 37.7539 19.2324 37.6477C19.5642 37.5282 19.8562 37.3291 20.104 37.0814L35.5985 21.4409C36.0896 20.9454 36.3152 20.3083 36.3152 19.6136C36.3152 18.919 36.094 18.2863 35.5985 17.7907C35.1073 17.2952 34.4746 17.0651 33.78 17.0651C33.0854 17.0651 32.4527 17.2952 31.9616 17.7907L18.3077 31.5729L18.3033 31.5773Z'
            />
        </svg>
    )
}
