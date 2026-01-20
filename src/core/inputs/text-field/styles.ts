import styled from '@emotion/styled'
import { theme } from '@/theme'

const { gray, primary } = theme.colors

export const Wrapper = styled.div``

export const Helper = styled.div`
    width: 42px;
    height: 38px;

    display: flex;
    align-items: center;
`

export const HelperButton = styled.div`
    opacity: 0;
    padding: 4px;
    display: flex;
    border-radius: 100px;
    transition:
        opacity 0.2s ease,
        background-color 0.2s ease;

    &:hover {
        opacity: 1;
        cursor: pointer;
        background-color: ${primary.main}0a;
    }
`

export const TextFieldWrapper = styled.div`
    width: 100%;
    display: flex;
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
