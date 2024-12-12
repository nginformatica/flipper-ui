import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconIMC = ({ width, height, viewBox }: IIconProps) => (
    <svg
        width={width || 30}
        height={height || 30}
        viewBox={viewBox || '0 0 30 30'}
        style={{ margin: '0px auto' }}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill={primary.main}
            d='M14.0003 23.9842C19.3717 23.9842 23.8531 19.5841 23.8531 14.0003C23.8531 8.41659 19.3717 4.01643 14.0003 4.01643C8.62888 4.01643 4.14747 8.41659 4.14747 14.0003C4.14747 19.5841 8.62888 23.9842 14.0003 23.9842ZM14.0003 27.3337C21.322 27.3337 27.2574 21.3641 27.2574 14.0003C27.2574 6.63653 21.322 0.666992 14.0003 0.666992C6.67859 0.666992 0.743164 6.63653 0.743164 14.0003C0.743164 21.3641 6.67859 27.3337 14.0003 27.3337Z'
        />
        <path
            fill={primary.main}
            d='M8.20318 16.5768H6.74871V10.6237H8.20318V16.5768Z'
        />
        <path
            fill={primary.main}
            d='M11.1329 10.6237L12.4835 14.7655L13.8299 10.6237H15.7498V16.5768H14.287V15.1867L14.4283 12.341L12.9656 16.5768H12.0014L10.5345 12.3369L10.6758 15.1867V16.5768H9.21716V10.6237H11.1329Z'
        />
        <path
            fill={primary.main}
            d='M21.576 14.5611C21.5567 14.9754 21.4431 15.342 21.2353 15.661C21.0275 15.9771 20.7352 16.2225 20.3584 16.3969C19.9844 16.5714 19.5564 16.6586 19.0743 16.6586C18.2792 16.6586 17.6531 16.4037 17.196 15.894C16.7389 15.3843 16.5103 14.6647 16.5103 13.7352V13.4408C16.5103 12.8575 16.6128 12.3478 16.8178 11.9116C17.0256 11.4728 17.3234 11.1348 17.7113 10.8977C18.0992 10.6578 18.548 10.5379 19.0577 10.5379C19.7919 10.5379 20.382 10.7287 20.828 11.1103C21.2741 11.4892 21.5276 12.0125 21.5885 12.6803H20.134C20.123 12.3178 20.0301 12.0575 19.8556 11.8994C19.6811 11.7413 19.4151 11.6622 19.0577 11.6622C18.6948 11.6622 18.4288 11.7958 18.2598 12.0629C18.0908 12.3301 18.0022 12.7566 17.9939 13.3427V13.7638C17.9939 14.3989 18.0742 14.8528 18.2349 15.1253C18.3984 15.3979 18.6782 15.5342 19.0743 15.5342C19.4096 15.5342 19.6658 15.4565 19.8431 15.3012C20.0204 15.1458 20.1146 14.8991 20.1257 14.5611H21.576Z'
        />
    </svg>
)
