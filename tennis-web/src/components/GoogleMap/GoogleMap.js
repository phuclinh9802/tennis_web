import React from 'react';
import GoogleMapReact from 'google-map-react';

import './GoogleMap.css'

const defaultProps = {
  center: { lat: 21.0028, lng: 105.8151 },
  zoom: 13
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  return (
    <div className="google-map">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent
          lat={21.0028}
          lng={105.8151}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap; 
