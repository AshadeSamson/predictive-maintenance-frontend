import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 10px;
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

export const LogoBox = styled.div`
    margin-right: auto;

    h1 {
        font-weight: ${({ theme }) => theme.weight.black};
        font-size: ${({ theme }) => theme.size.h1};
    }

    h1 span {
        color: ${({ theme }) => theme.colors.primary};
     }

     @media (max-width: 768px) {
        h1 {
            font-size: 1.5rem;
        }
    }

`

export const MenuBox = styled.div`
     a  {
        margin-right: 20px;
        font-weight: ${({ theme }) => theme.weight.medium};
        font-size: ${({ theme }) => theme.size.normal};
     }

     a:last-child {
        margin-right: 0;
    }

     a:hover {
        font-weight: ${({ theme }) => theme.weight.black};
     }

     @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 100%;
        left: 1;
        right: 0;
        background-color: ${({ theme }) => theme.colors.dark};
        z-index: 1000;

        a {
            margin-right: 0;
            display: block;
            width: 100%;
            padding: 20px;
        }

        a:last-child {
            margin-bottom: 0;
        }
    } 
`

export const StyledButton = styled.button`
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: ${({ theme }) => theme.size.normal};
    font-weight: 700;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
   

    &:hover {
        opacity: 0.9;
        transform: scale(0.90);
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.875rem;
    }
`


export const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 768px) {
        display: block;
    }
`