import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconMail = ({ width, height, viewBox }: IIconProps) => (
    <svg
        x='0px'
        y='0px'
        version='1.1'
        width={width || 150}
        height={height || 'auto'}
        viewBox={viewBox || '0 0 1000 1000'}
        enableBackground='new 0 0 1000 1000'>
        <g>
            <g transform='translate(0.000000,440.000000) scale(0.100000,-0.100000)'>
                <path
                    fill={primary.main}
                    d='M486.2,3571c-173.6-46.8-327.6-208.7-364.7-384.2c-15.6-66.3-21.5-938.1-21.5-2755.7c0-2911.7-5.8-2763.5,115.1-2929.3c33.2-42.9,105.3-103.4,161.9-136.5l103.4-56.6h2043.9H4570l37.1,46.8c48.8,60.4,46.8,159.9-3.9,224.3l-39,50.7h-1921c-1121.4,0-1919,7.8-1919,17.6c0,9.8,507.1,503.2,1127.2,1096C2469.6-661,3066.4-89.6,3175.6,17.6l198.9,191.1l263.3-251.6c282.8-267.2,401.8-353,612.4-431c159.9-58.5,466.1-80,651.4-44.9c167.7,33.2,415.4,156,544.1,269.1c56.6,50.7,846.4,805.4,1753.3,1673.3l1647.9,1579.7l9.8-1398.3l9.7-1396.4l46.8-50.7c46.8-50.7,132.6-66.3,206.7-39c87.8,35.1,87.8,37.1,87.8,1564.1c0,1657.7,7.8,1581.6-163.8,1751.3c-177.5,179.4,236,163.8-4388,161.9C1439.9,3596.3,558.3,3590.5,486.2,3571z M8532.9,3173.1c-42.9-39-797.7-760.6-1675.3-1603.1C5980,727.5,5219.4,5.9,5168.7-33.1c-185.3-138.5-458.3-200.9-684.5-154.1c-261.3,54.6-222.3,21.5-2049.7,1770.8c-934.2,897.1-1708.4,1638.2-1718.2,1646c-11.7,9.7,1700.6,17.5,3939.5,17.5l3957-2L8532.9,3173.1z M2036.6,1494C2633.4,922.5,3122.9,450.6,3122.9,446.7s-528.5-512.9-1176-1131.1C1301.4-1302.7,700.7-1879.9,613-1967.7l-161.9-158V446.7v2572.4l249.6-241.8C837.2,2644.6,1437.9,2067.3,2036.6,1494z'
                />
                <path
                    fill={primary.main}
                    d='M6769.9-292.4C6422.7-366.6,6161.4-505,5904-748.8c-282.8-273-458.3-602.6-520.7-984.9c-29.2-183.3-13.7-542.2,31.2-704c171.6-635.8,659.2-1109.7,1308.6-1271.6c198.9-48.8,610.4-42.9,817.2,11.7c187.2,50.7,392,144.3,557.8,255.5l119,81.9l719.6-717.7c706-706,719.6-719.6,797.7-719.6c105.3,0,165.8,60.4,165.8,165.8c0,78-13.7,91.7-719.6,797.7l-717.7,717.7l97.5,148.2c111.2,171.6,204.8,382.3,251.6,573.4c44.9,183.3,44.9,592.9,0,774.3C8651.8-978.9,8193.5-501.1,7565.6-319.7C7380.3-267.1,6955.1-251.5,6769.9-292.4z M7304.2-614.2c551.9-80,1023.9-505.1,1162.3-1045.3c46.8-185.3,50.7-489.5,7.8-670.9c-91.7-395.9-382.3-754.7-758.7-936.1c-204.8-99.5-364.7-136.5-606.5-136.5c-397.9,0-704,128.7-992.7,419.3c-144.3,142.4-193.1,206.7-257.4,341.3c-226.2,462.2-206.7,938.1,54.6,1378.8c85.8,140.4,312,366.6,452.4,452.5C6668.4-633.8,6976.6-567.4,7304.2-614.2z'
                />
            </g>
        </g>
    </svg>
)
