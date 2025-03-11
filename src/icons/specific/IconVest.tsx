import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { primary } = theme.colors

export const IconVest = ({ color, width, height, viewBox }: IIconProps) => (
    <svg
        fill='none'
        width={width || 34}
        height={height || 34}
        viewBox={viewBox || '0 0 49 48'}
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M15.1789 6.15315C15.0411 6.2374 14.9109 6.38293 14.8955 6.47485C14.8726 6.57442 14.8419 7.6391 14.8189 8.85697C14.773 11.2544 14.7041 12.028 14.4206 13.5523C13.9917 15.9191 12.9347 18.6305 11.6862 20.5914C11.4181 21.0203 11.173 21.4033 11.1424 21.4569C11.1041 21.5258 11.7934 21.5488 14.1909 21.5488H17.3006V13.7744V5.99996H16.3662C15.5619 5.99996 15.3858 6.02293 15.1789 6.15315Z'
            fill={color || primary.main}
        />
        <path
            d='M18.9092 13.7744V21.5488H21.3985H23.8879V17.7267V13.8969L23.4819 13.3531C22.1492 11.5838 21.4368 9.50037 21.4368 7.37101C21.4368 6.62804 21.3449 6.32932 21.0385 6.12251C20.9007 6.02293 20.6479 5.99996 19.8896 5.99996H18.9092V13.7744Z'
            fill={color || primary.main}
        />
        <path
            d='M28.269 6.12251C27.9626 6.32932 27.8707 6.62804 27.8707 7.37101C27.8707 9.50037 27.1584 11.5838 25.8256 13.3531L25.4197 13.8969V17.7267V21.5488H27.909H30.3984V13.7744V5.99996H29.418C28.6597 5.99996 28.4069 6.02293 28.269 6.12251Z'
            fill={color || primary.main}
        />
        <path
            d='M32.0068 13.7744V21.5488H35.1166C37.5753 21.5488 38.2111 21.5258 38.1651 21.4493C38.1268 21.4033 37.9583 21.1352 37.7821 20.8595C36.1277 18.2705 35.0094 15.1378 34.6494 12.0587C34.5881 11.5301 34.5115 10.0978 34.4885 8.87228C34.4655 7.65442 34.4349 6.57442 34.4119 6.47485C34.3966 6.38293 34.2664 6.2374 34.1285 6.15315C33.9217 6.02293 33.7456 5.99996 32.949 5.99996H32.0068V13.7744Z'
            fill={color || primary.main}
        />
        <path
            d='M10.7134 26.451V29.7446H17.3006H23.8878V26.451V23.1574H17.3006H10.7134V26.451Z'
            fill={color || primary.main}
        />
        <path
            d='M25.4197 26.451V29.7446H32.0069H38.5941V26.451V23.1574H32.0069H25.4197V26.451Z'
            fill={color || primary.main}
        />
        <path
            d='M10.7134 36.3318C10.7134 40.6058 10.7287 41.3488 10.8283 41.5403C11.081 42.0228 10.7287 41.9998 16.8946 41.9998H22.5091L22.7389 41.793C22.8921 41.6475 23.1218 41.2186 23.4282 40.4909L23.8878 39.4032V35.382V31.3531H17.3006H10.7134V36.3318Z'
            fill={color || primary.main}
        />
        <path
            d='M25.4197 35.382V39.4032L25.8793 40.4909C26.1856 41.2186 26.4154 41.6475 26.5686 41.7854L26.7984 41.9998H32.4128C38.5788 41.9998 38.2264 42.0228 38.4792 41.5403C38.5788 41.3488 38.5941 40.6058 38.5941 36.3318V31.3531H32.0069H25.4197V35.382Z'
            fill={color || primary.main}
        />
    </svg>
)
