import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { brown, orange } = theme.colors

export const IconWaitingDelivery = ({ width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 25}
        height={height || 24}
        viewBox={viewBox || '0 0 25 24'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            fill={orange[600]}
            d='M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z'
        />
        <path
            fill={brown[600]}
            d='M6.77475 5.3623H10.4256L13.1637 8.1502V8.68122H12.085C11.5831 8.68122 11.1769 9.09939 11.1769 9.61052V10.0088H7.68749V10.9381H11.1769V11.8674H7.68749V12.7967H11.1769V14.6553H6.77021C6.2682 14.6553 5.86206 14.2371 5.86206 13.726L5.86664 6.2916C5.86664 5.78047 6.27279 5.3623 6.77475 5.3623ZM9.96922 6.0593V8.61485H12.4791L9.96922 6.0593ZM16.3996 9.34501H12.7488C12.2468 9.34501 11.8407 9.76321 11.8407 10.2743L11.8361 17.7087C11.8361 18.2198 12.2423 18.638 12.7443 18.638H18.225C18.727 18.638 19.1377 18.2198 19.1377 17.7087V12.1329L16.3996 9.34501ZM17.3124 16.7794H13.6615V15.8501H17.3124V16.7794ZM17.3124 14.9208H13.6615V13.9915H17.3124V14.9208ZM15.9433 12.5975V10.042L18.4532 12.5975H15.9433Z'
        />
    </svg>
)
