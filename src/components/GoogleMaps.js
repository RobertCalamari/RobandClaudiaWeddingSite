import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';


function GoogleMaps() {

    const center = { lat: 40.175, lng: -74.67785 };

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: '------',
    })

    if (!isLoaded){
        return <div>loading</div>;
    }

    return (
        
        <div style={{width: '100%', height: '100%'}}>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>
            <Marker position={center} />
            </GoogleMap>
            
        </div>
    );
}


export default GoogleMaps;