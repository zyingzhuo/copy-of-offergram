import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

 const Maps=({apiKey, currentProduct, GMapSetting})=>{
     const {isLoaded}= useJsApiLoader({
         id:'google-map-script',
         googleMapsApiKey: apiKey,
     });

     const containerStyle={
         width:'600px',
         height:'300px'
     };

     const center={
         lat:currentProduct.lat,
         lng:currentProduct.lng
     };

     return (
         <>
            {currentProduct && isLoaded && (
                <>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={GMapSetting.zoom}
                    >
                        <Marker
                            key={currentProduct.id}
                            position={{
                                lat: currentProduct.lat,
                                lng: currentProduct.lng,
                            }}
                          
                        />
                    </GoogleMap>
                </>
            )}

         </>
     )
 }

 export default React.memo(Maps);