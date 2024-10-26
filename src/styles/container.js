import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  padding: 0 0;
  margin: 0 auto;
  
`

export const DashboardContainer = styled.div`
  max-width: 100%;
  padding: 0 0;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    
  }
`

export const Section = styled.section`
    margin: auto auto;
    text-align: center;
    padding-top: 20%;
    width: 100%;
    height: 100dvh;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.colors.white};

    h1 {
      font-size: calc( 1.5 * ${({theme}) => theme.size.h1});
      font-weight: ${({theme}) => theme.weight.black};
      color: ${({theme}) => theme.colors.secondary};
      text-shadow:  -1px 1px 6px rgba(0, 0, 0, 0.5);
      padding: 5px;
    }
`
