import React from 'react'
import { Section, Hr, Headline, MapBox } from '../styles/customers.styled'
import { Container } from '../styles/container'
import Map from '../components/map'

function CustomersMap() {
  return (
  <Section>
    <Container>
      <Headline>
        <h1>PMSF WORKSHOP</h1>
        <p>Our Customers Map Location</p>
      </Headline>
      <Hr></Hr>
      <MapBox>
        <Map />
      </MapBox>  
    </Container>
   </Section>
  )
}

export default CustomersMap