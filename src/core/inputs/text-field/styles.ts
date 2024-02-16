import { default as styled } from 'styled-components'

export const Wrapper = styled.div``

export const Helper = styled.div`
    width: 42px;
    height: 38px;
`

export const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: rows;
    width: 100%;
    align-items: center;
    button {
        display: none;
    }
    :hover button {
        display: flex;
    }
`

export const StaticTextFieldWrapper = styled.div`
    display: flex;
    flex-direction: rows;
    width: 100%;
    align-items: center;
`
