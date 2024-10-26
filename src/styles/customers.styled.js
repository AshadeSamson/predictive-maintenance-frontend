import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const Section = styled.section`
        text-align: center;
        background-color: ${({theme}) => theme.colors.gray};
        padding: 25px 0;
        height: 100dvh;
        
`


export const Hr = styled.hr`
            background-color: ${({theme}) => theme.colors.primary};
            height: 5px;
            width: 50%;
            margin: auto auto 30px;
            border: none;
            border-radius: 5px;
            box-shadow:  -1px 1px 6px rgba(0, 0, 0, 0.5);
`

export const Headline = styled.div`
        color: ${({theme}) => theme.colors.white};

        h1 {
            margin-bottom: 5px;
        }

        p {
            font-size: ${({theme}) => theme.size.small};
            margin-bottom: 25px;
        }

`

export const MapBox = styled.div`

`

export const StyledMapContainer = styled(MapContainer)`
            width: 100%;
            height: 65dvh;



`