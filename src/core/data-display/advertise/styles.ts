import styled from '@emotion/styled'
import Typography from '@/core/data-display/typography'
import Paper from '@/core/surfaces/paper'
import { theme } from '@/theme'

const { gray } = theme.colors

export const AdvertiseTypography = styled(Typography)`
    && {
        border-left: 1px solid ${gray[400]};
    }
`

export const AdvertiseContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
`
