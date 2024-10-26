import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    width: 100%;
    overflow: hidden;
    
`

export const DivOne = styled.div`
        margin-right: auto;
        max-width: 100%;
        overflow: hidden;
`

export const DivTwo = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 25px;
        max-width: 100%;
        overflow: hidden;
        color:  ${({theme}) => theme.colors.secondary};
`

export const FlexOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%; 
    overflow: hidden;
    gap: 10px;
`

export const FlexThree = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
    max-width: 100%; 
    overflow: hidden; 
`

export const FlexTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

