import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { customers } from '../placholders/customers'
import { StyledMapContainer } from '../styles/customers.styled'


function Map() {
  return (
  <StyledMapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {customers.map((customer, idx) => (
      <Marker key={idx} position={[customer.lat, customer.lng]}>
        <Popup>{customer.name}</Popup>
      </Marker>
    ))}
</StyledMapContainer>
  )
}

export default Map