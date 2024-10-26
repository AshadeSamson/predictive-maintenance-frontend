import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  background-color: #eee;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 20px;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
`;

export const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SpeedBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  padding: 10px 10px;
`;
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StatBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${(props) => props.textColor};

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .icon {
    font-size: 36px; /* Icon size */
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 40px;
  }
  h5 {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  p {
    font-size: 70px;
    font-weight: bold;
  }
`;

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 350px; /* Ensures the box has a minimum height */
  max-height: 800px; /* Adjust this as needed to fit within the screen */

  height: 300px;
  h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CalendarContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 250px;
`;

export const FloatingCalendar = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
  position: absolute;
  right: 20px;
  top: 20px;
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #f9f9f9;
  border-radius: 8px;
`;
