import styled from "styled-components";
import bg from "../assets/images/pmsf_bg1.jpg";

export const Hero = styled.section`
  text-align: center;
  background-image: url(${bg});
  background-color: ${({ theme }) => theme.colors.dark};
  background-blend-mode: color-dodge;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;

  h1 {
    font-size: calc(2 * ${({ theme }) => theme.size.h1});
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.weight.black};
  }

  div {
    width: 80%;
    margin: auto auto;
    padding: 5% 0;
    text-align: center;
  }

  p {
    font-size: ${({ theme }) => theme.size.normal};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    padding: 20% 0;

    div {
      width: 100%;
      padding: 15px;
    }
  }
`;
