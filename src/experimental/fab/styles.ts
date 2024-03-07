import { default as styled } from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 200ms ease;
    &:hover {
        opacity: 1;
    }
`
