import { default as styled } from 'styled-components'

export const DENSE = { padding: '2px', margin: '0px 7px' }

export const CheckFieldsWrapper = styled.div`
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
