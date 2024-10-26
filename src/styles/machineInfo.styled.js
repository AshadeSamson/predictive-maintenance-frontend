//import styled from "styled-components";

/*export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    row-gap: 75px;
    column-gap: 10px;
    padding: 55px 5px;
    width: 100%;


    @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  } 
`*/

/*
export const FlexOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%; 
    overflow-x: hidden;
    gap: 40px;
`



export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 55px;
    gap: 15px;
`
*/

/*export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
*/

export const FlexOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const DivBox = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
//////////////////////////////////////////////////////////////////////////////////////////////
// styles/machineInfo.styled.js

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "#f9f9f9"};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;
