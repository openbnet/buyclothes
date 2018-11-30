import React from 'react'
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMaps extends React.Component {
    
    render() {
        
        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        const style = {
            height: '230px',
            width: '415px'
        }

        console.log("google", this.props.google);

        return (
            <Map 
                center={{
                    lat: 1.3191779,
                    lng: 103.8903676
                }}
                initialCenter={{
                    lat: 1.3191779,
                    lng: 103.8903676
                }}
                google={this.props.google}
                style={style}
                zoom={17}
            >
        
                <Marker name={'60 Paya Lebar Road Paya Lebar Square #07-49 Singapore 438103'} />

            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBdJB_bLY7-eRdJyRyADFqUjcZUE8p_k6g')
})(GoogleMaps)
