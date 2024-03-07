import { default as styled } from 'styled-components'
import Typography from '@/core/data-display/typography'
import MuiPaper from '@/core/surfaces/paper'
import { theme } from '@/theme'

const { grays } = theme.colors

export const AdvertiseTypography = styled(Typography)`
    && {
        border-left: 1px solid ${grays.g5};
    }
`

export const Paper = styled(MuiPaper)`
    display: flex;
    flex-direction: column;
`
