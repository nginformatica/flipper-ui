import { default as styled } from 'styled-components'
import { theme } from '@/theme'

const { gray } = theme.colors

export const Wrapper = styled.div``

export const Helper = styled.div`
    width: 42px;
    height: 38px;
`

export const TextFieldWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: rows;
    align-items: center;
    button {
        display: none;
    }
    :hover button {
        display: flex;
    }
`

export const StaticTextFieldWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: rows;
    align-items: center;
`

export const CharactersCount = styled.span`
    color: ${gray[600]};
    font-size: 14px;
    font-family:
        Roboto,
        Helvetica,
        Arial,
        sans- serif;
`
