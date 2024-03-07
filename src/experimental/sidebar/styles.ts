import { default as styled } from 'styled-components'
import { Sidebar as FlipperSidebar, ListItem } from '@/index'
import { theme } from '@/theme'

const { grays, primary } = theme.colors

export const StyledFlipperSidebar = styled(FlipperSidebar)`
    & > div {
        border-right: 1px solid ${grays.g6};
    }
`

export const MenuItem = styled(ListItem)`
    &&& {
        & div {
            padding: 0;
        }
    }
`

export const Link = styled.a`
    color: ${primary.main};
    text-decoration: none;
`

export const PaperBar = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding-bottom: 16px;
`

export const SkeletonWrapper = styled.div`
    padding: 2px 10px;
`
