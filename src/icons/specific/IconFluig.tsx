import React from 'react'
import type { IIconProps } from '../utils'
import { theme } from '@/theme'

const { neutral } = theme.colors

export const IconFluig = ({ height, white = false, width }: IIconProps) => (
    <svg
        fill={white ? neutral[50] : neutral[200]}
        width={width || 24}
        height={height || 24}
        viewBox='0 0 502 512'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M125.002861,34.4531403c-166.6705322,98.16922-166.6704559,344.9245605,0.0000839,443.09375S501.1427917,452.3382874,501.1427917,256S291.6734009-63.7159996,125.002861,34.4531403z M426.013916,337.7513123c-0.9072266,19.5047302-11.0375366,20.7899475-94.3484497-2.0411682c1.84021,35.8569031-1.4154358,75.3464661-10.4108887,91.4355164c-64.7005615-6.9405518-211.238739-41.9780884-243.680603-65.1759949c-9.1514587-74.7065125-11.5357132-143.3980713-1.4664383-201.0205841c6.2463608-13.780426,73.4499054,5.3048096,93.4503174,13.1087952c-1.9783478-35.2806702-2.6678314-82.1903076,8.4890747-94.4795761c61.2814178,8.8321762,194.7952118,46.1159058,218.2311554,52.9198074c15.4252625,4.4783325,30.068512,5.000824,31.8781128,41.7365265C431.8997498,250.2287598,426.9210815,318.2466125,426.013916,337.7513123z M326.6758728,232.2897644c2.0823669,18.0467987,4.9895935,103.4203796,4.9895935,103.4203796l-139.3068695-38.2828064c-11.1950989-3.6447754-19.0744781-13.6978455-19.9389038-25.4395752l-2.8617706-97.9298096c0.0018158,0.0003357,36.6268921,7.147995,76.5414886,16.901535C319.2689819,208.8392944,325.315094,220.4962006,326.6758728,232.2897644z' />
    </svg>
)