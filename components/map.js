"use client"
import React from 'react';
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';
import { getAllMarkers } from '@/app/actions';







class RadarMap extends React.Component {
  state = {
    lng: 22.488,
    lat:58.254
  };



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
      map.on('click', (e) => {        
        this.setState({
          lng: e.lngLat.lng,
          lat: e.lngLat.lat

        })

        
        Radar.ui.marker({ text: "hello"})
          .setLngLat(e.lngLat)
          .addto(map);
      });

      console.log(Radar.ui.marker)
    }
    render() {

        return (
        <>
        {this.state.lng}
        <div></div>
        {this.state.lat}
      <div id="map-container" style={{ height: "500px", position: 'absolute', width: '100%' }}>
        <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }}/>
      </div>
        </>
    );
  }
};

export default RadarMap;