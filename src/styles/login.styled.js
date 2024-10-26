import styled from 'styled-components'

export const Section = styled.section`
        text-align: center;
        padding-top: 5%;
        height: 100dvh;
        background-color: ${({theme}) => theme.colors.gray};

        @media (max-width: 768px){
            padding-top: 50px;
        }

`

export const Form = styled.form`

        box-shadow:  -5px 5px 10px rgba(0, 0, 0, 0.5);
        width: 350px;
        margin: auto auto;
        padding: 25px 10px;
        border-radius: 10px;
        background-color: ${({theme}) => theme.colors.white};

        h1 {
            color: ${({theme}) => theme.colors.primary};
            margin-bottom: 20px;
            font-size: ${({theme}) => theme.size.h2};
            font-weight: ${({theme}) => theme.weight.black};
        }

        @media (max-width: 768px){
            width: 90%;
            height: 75dvh;
            padding: 25px 5px;
        }
`



export const Box = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;

        input {
            width: 90%;
            height: 40px;
            border: none;
            border-radius: 10px;
            box-shadow:  -1px 1px 6px rgba(0, 0, 0, 0.5);
            padding: 15px;
            cursor: pointer;
            background-color: ${({theme}) => theme.colors.white};
            font-size: ${({theme}) => theme.size.normal};
        }

        input:focus{
            outline: none;
            border: none;
            border-radius: 0;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            border-bottom: 2.5px solid ${({theme}) => theme.colors.primary};
        }

        label {
            color: ${({theme}) => theme.colors.dark};
            font-size: ${({theme}) => theme.size.h3};
            margin-bottom: 5px;
        }

        @media (max-width: 768px){
            margin-bottom: 40px;
        }

`


export const Button = styled.button`
    width: 100px;
    max-width: 300px;
    height: 40px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    box-shadow:  -1px 1px 6px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-size: ${({theme}) => theme.size.h2};
    font-weight: 700;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.dark};
`

export const Optional = styled.p`
    font-size: ${({theme}) => theme.size.small};
    margin-top: 25px;

    a{
        color: ${({theme}) => theme.colors.secondary};
    }
`