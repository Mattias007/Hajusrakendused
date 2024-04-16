"use client"
import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';




class RadarMap extends React.Component {
    componentDidMount() {
        Radar.initialize('prj_live_pk_80d4b2690b810855f2e3b400883c0760f0066577');
        
        // create a map
        const map = new Radar.ui.map({
            container: 'map',
            style: 'radar-default-v1',
            center: [22.488, 58.254],
            zoom: 12,
        });
        
        // add a marker to the map
    Radar.ui.marker({ text: 'Radar HQ' })
      .setLngLat([22.488, 58.254])
      .addTo(map);

      map.on('click', (e) => {
        Radar.ui.marker({ text: 'Clicked Location' })
          .setLngLat(e.lngLat)
          .addTo(map);
      });
      
    }

    render() {

        return (
        <>
      <div id="map-container" style={{ height: "500px", position: 'absolute', width: '100%' }}>
        <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }}/>
      </div>
        </>
    );
  }
};

export default RadarMap;