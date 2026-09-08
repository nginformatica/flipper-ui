import styled from '@emotion/styled'

export const InlineWrapper = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const LinearWrapper = styled(InlineWrapper)`
    .MuiLinearProgress-root {
        flex: 1;
    }
`

export const CircularWrapper = styled.div`
    position: relative;
    display: inline-flex;
`

export const CircularLabel = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
