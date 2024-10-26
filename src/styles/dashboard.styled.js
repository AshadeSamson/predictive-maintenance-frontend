import styled from "styled-components";

export const Gridboard = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  overflow-y: auto;
  scrollbar-width: thin;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 100px;
    left: 0;
    width: 250px;
    height: 80dvh;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-y: auto;
  scrollbar-width: thin;
  position: relative;

  @media (max-width: 768px) {
    header {
      background-color: ${({ theme }) => theme.colors.dark};
      position: relative;
      height: 100px;
    }

    div {
      background-color: ${({ theme }) => theme.colors.gray};
      min-height: 100dvh;
      overflow-y: auto;
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 5px;
  width: 100%;
  height: 100dvh;
  overflow-y: auto;
  scrollbar-width: thin;

  a {
    color: black;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.h3};
    padding: 10px 5px;
    border-radius: 5px;
  }

  a > p {
    font-size: ${({ theme }) => theme.size.normal};
  }

  a.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
    font-weight: ${({ theme }) => theme.weight.bold};
    box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    width: 250px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 25px;
  left: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`;

export const Select = styled.select`
  position: fixed;
  top: 10px;
  left: 60%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 10px;
  border-radius: 5px;
  border: 0 solid ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.size.h3};
  cursor: pointer;
  width: 40%;
  max-width: 200px;
  text-align: center;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
