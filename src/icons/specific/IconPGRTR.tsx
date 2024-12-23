import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { lightBrown, neutral } = theme.colors

export const IconPGRTR = ({ width, height, viewBox }: IIconProps) => (
    <svg
        width={width || 64}
        height={height || 82}
        viewBox={viewBox || '0 0 64 82'}>
        <path
            fill={lightBrown[200]}
            d='M40 0H8C3.6 0 0.0399997 3.69 0.0399997 8.2L0 73.8C0 78.31 3.56 82 7.96 82H56C60.4 82 64 78.31 64 73.8V24.6L40 0ZM36 28.7V6.15L58 28.7H36Z'
        />
        <path
            fill={neutral[50]}
            d='M10.6155 53.8186H7.62646V51.9333H10.6155C11.0774 51.9333 11.4534 51.8582 11.7434 51.7078C12.0334 51.552 12.2456 51.3372 12.3799 51.0632C12.5142 50.7893 12.5813 50.4805 12.5813 50.1367C12.5813 49.7876 12.5142 49.4626 12.3799 49.1619C12.2456 48.8611 12.0334 48.6194 11.7434 48.4368C11.4534 48.2542 11.0774 48.1628 10.6155 48.1628H8.46436V58H6.04736V46.2695H10.6155C11.5339 46.2695 12.3208 46.436 12.9761 46.769C13.6367 47.0967 14.1416 47.5505 14.4907 48.1306C14.8398 48.7107 15.0144 49.374 15.0144 50.1206C15.0144 50.8779 14.8398 51.5332 14.4907 52.0864C14.1416 52.6396 13.6367 53.0667 12.9761 53.3674C12.3208 53.6682 11.5339 53.8186 10.6155 53.8186ZM25.9795 51.8689V56.5176C25.7969 56.7378 25.5149 56.9768 25.1335 57.2346C24.7522 57.4871 24.2607 57.7046 23.6592 57.8872C23.0576 58.0698 22.3298 58.1611 21.4758 58.1611C20.7185 58.1611 20.0283 58.0376 19.4053 57.7905C18.7822 57.5381 18.2451 57.1702 17.7939 56.6868C17.3481 56.2034 17.0044 55.6125 16.7627 54.9143C16.521 54.2107 16.4001 53.4077 16.4001 52.5054V51.7722C16.4001 50.8699 16.5156 50.0669 16.7466 49.3633C16.9829 48.6597 17.3186 48.0662 17.7537 47.5828C18.1887 47.0994 18.707 46.7314 19.3086 46.479C19.9102 46.2266 20.5789 46.1003 21.3147 46.1003C22.3352 46.1003 23.1731 46.2668 23.8284 46.5999C24.4836 46.9275 24.9832 47.384 25.3269 47.9695C25.676 48.5496 25.8909 49.2156 25.9714 49.9675H23.627C23.5679 49.5701 23.4551 49.2236 23.2886 48.9282C23.1221 48.6328 22.8831 48.4019 22.5715 48.2354C22.2654 48.0688 21.8679 47.9856 21.3792 47.9856C20.9763 47.9856 20.6165 48.0688 20.2996 48.2354C19.988 48.3965 19.7249 48.6355 19.51 48.9524C19.2952 49.2693 19.1313 49.6614 19.0186 50.1287C18.9058 50.5959 18.8494 51.1384 18.8494 51.7561V52.5054C18.8494 53.1177 18.9084 53.6602 19.0266 54.1328C19.1448 54.6001 19.3193 54.9949 19.5503 55.3171C19.7866 55.634 20.0767 55.873 20.4204 56.0342C20.7642 56.1953 21.1643 56.2759 21.6208 56.2759C22.0022 56.2759 22.3191 56.2437 22.5715 56.1792C22.8293 56.1147 23.0361 56.0369 23.1919 55.9456C23.353 55.8489 23.4766 55.7576 23.5625 55.6716V53.593H21.355V51.8689H25.9795ZM27.9292 46.2695H32.304C33.2009 46.2695 33.9717 46.4038 34.6162 46.6724C35.2661 46.9409 35.7656 47.3384 36.1147 47.8647C36.4639 48.3911 36.6384 49.0383 36.6384 49.8064C36.6384 50.4348 36.531 50.9746 36.3162 51.4258C36.1067 51.8716 35.8086 52.2449 35.4219 52.5457C35.0405 52.8411 34.592 53.0774 34.0764 53.2546L33.311 53.6575H29.5083L29.4922 51.7722H32.3201C32.7444 51.7722 33.0962 51.697 33.3755 51.5466C33.6548 51.3962 33.8643 51.1868 34.0039 50.9182C34.1489 50.6497 34.2214 50.3381 34.2214 49.9836C34.2214 49.6077 34.1516 49.2827 34.012 49.0088C33.8723 48.7349 33.6602 48.5254 33.3755 48.3804C33.0908 48.2354 32.7336 48.1628 32.304 48.1628H30.3462V58H27.9292V46.2695ZM34.4873 58L31.8125 52.7712L34.3665 52.7551L37.0735 57.8872V58H34.4873ZM43.261 46.2695V58H40.8521V46.2695H43.261ZM46.8704 46.2695V48.1628H37.2991V46.2695H46.8704ZM48.248 46.2695H52.6228C53.5198 46.2695 54.2905 46.4038 54.9351 46.6724C55.585 46.9409 56.0845 47.3384 56.4336 47.8647C56.7827 48.3911 56.9573 49.0383 56.9573 49.8064C56.9573 50.4348 56.8499 50.9746 56.635 51.4258C56.4255 51.8716 56.1274 52.2449 55.7407 52.5457C55.3594 52.8411 54.9109 53.0774 54.3953 53.2546L53.6299 53.6575H49.8271L49.811 51.7722H52.6389C53.0632 51.7722 53.415 51.697 53.6943 51.5466C53.9736 51.3962 54.1831 51.1868 54.3228 50.9182C54.4678 50.6497 54.5403 50.3381 54.5403 49.9836C54.5403 49.6077 54.4705 49.2827 54.3308 49.0088C54.1912 48.7349 53.979 48.5254 53.6943 48.3804C53.4097 48.2354 53.0525 48.1628 52.6228 48.1628H50.665V58H48.248V46.2695ZM54.8062 58L52.1313 52.7712L54.6853 52.7551L57.3923 57.8872V58H54.8062Z'
        />
    </svg>
)