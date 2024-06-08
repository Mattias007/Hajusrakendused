"use client"
import React from 'react';
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';
import { addMarker, getAllMarkers, deleteMarker, updatedMarker } from '@/app/actions/map';




class RadarMap extends React.Component {
  state = {
    lng: 22.488,
    lat: 58.254,
    data: [],
  };



  async componentDidMount() {
    Radar.initialize('prj_live_pk_80d4b2690b810855f2e3b400883c0760f0066577');

    // create a map
    this.map = new Radar.ui.map({
      container: 'map',
      style: 'radar-default-v1',
      center: [22.488, 58.254],
      zoom: 12,
    });

    let mainmarker = new Radar.ui.marker({ text: 'Kurssaare' }).setLngLat([22.488, 58.254]).addTo(this.map);

    const data = await getAllMarkers();
    this.setState({ data });


    this.markers = []

    // add a marker to the map
    if (this.markers != undefined) {
      this.map.on('click', (e) => {
        mainmarker.remove();
        mainmarker = Radar.ui.marker({ text: 'Cliked' }).setLngLat(e.lngLat).addTo(this.map);
        this.setState({
          lng: e.lngLat.lng,
          lat: e.lngLat.lat
        })
      }
      )
    };

  }
  async componentDidUpdate() {
    const data = await getAllMarkers();
    this.markers.map(e => {
      e.remove()
    })

    this.markers = data.map(element => (
      new Radar.ui.marker({ text: element.name })
        .setLngLat([parseFloat(element.longitude), parseFloat(element.latitude)])
        .addTo(this.map)
    ));

  }

  componentWillUnmount() {
    if (this.map) {
      this.map.off('click', this.handleMapClick);
    }
  }

  handleAddmarker = async (e) => {

    const formData = new FormData(e.target);
    const newMarker = {
      name: formData.get('name'),
      description: formData.get('description'),
      latitude: this.state.lat,
      longitude: this.state.lng,
    };
    await addMarker(e);
    const updatedData = await getAllMarkers();
    this.setState({ data: updatedData });

    const newMapMarker = new Radar.ui.marker({ text: newMarker.name })
      .setLngLat([newMarker.longitude, newMarker.latitude])
      .addTo(this.map);

    this.markers.push(newMapMarker)
  }

  handleDelete = async (e) => {
    await deleteMarker(e);


    const updatedData = await getAllMarkers();

    this.setState({ data: updatedData });

  }

  handleUpdate = async (e) => {
    await updatedMarker(e);
    const updatedData = await getAllMarkers();

    this.setState({ data: updatedData });

  }


  renderMarkers() {
    return this.state.data.map((element, index) => (
      <div className='p-2 bg-green-200 rounded shadow' key={index}>
        <h1>Name: {element.name}</h1>
        <h1>Description: {element.description}</h1>
        <h1>Lon: {element.longitude}</h1>
        <h1>Lat: {element.latitude}</h1>
        <form action={this.handleUpdate} className='py-2 w-full'>
          <div className='flex flex-col gap-2'>
            <input name='name' type='text' defaultValue={element.name} className='rounded shadow p-2'></input>
            <input name='description' type='text' defaultValue={element.description} className='rounded shadow p-2'></input>
            <input name='longitude' type='number' step="any" defaultValue={element.longitude} className='rounded shadow p-2'></input>
            <input name='latitude' type='number' step="any" defaultValue={element.latitude} className='rounded shadow p-2'></input>
            <button name="id" value={element.id} type="submit" className='bg-green-300 hover:bg-green-400 p-2 text-center rounded'>Edit</button>
          </div>
          <input name='index' value={index} readOnly className='hidden'></input>
        </form>
        <form action={this.handleDelete}>
          <input name='index' value={index} readOnly className='hidden'></input>
          <button name="id" value={element.id} type="submit" className='bg-green-300 hover:bg-green-400 p-2 text-center rounded w-full'>Delete</button>
        </form>
      </div>
    ));
  }


  render() {

    return (
      <>
        <div className='h-[500px]'>
          <div id="map-container" style={{ height: "500px", position: 'absolute', width: '100%' }}>
            <div id="map" style={{ height: '100%', width: '100%' }} />
          </div>
        </div>

        <form className='flex rounded gap-2 m-2 flex-col px-2 py-4 bg-green-200 shadow' action={this.handleAddmarker}>
          <div className='flex gap-1 justify-between flex-shrink flex-wrap'>
            <label>Latitude:</label>
            <input type="number" value={this.state.lat} onChange={e => this.setState({ lat: e.target.value })} name="latitude" className='w-full rounded shadow p-2' />
            <label>Longitude:</label>
            <input type="number" value={this.state.lng} onChange={e => this.setState({ lng: e.target.value })} name="longitude" className='w-full rounded shadow p-2'/>
            <label>Name:</label>
            <input type="text" placeholder='name' name="name" className='w-full rounded shadow p-2' />
            <label>Description:</label>
            <input type="text" placeholder="description" name="description" className='w-full rounded shadow p-2' />
          </div>

          <button type="submit" className='bg-green-300 hover:bg-green-400 p-2 text-center rounded w-full'>Submit</button>
        </form>

        <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3'>
          {this.renderMarkers()}
        </div>

      </>
    );
  }
};

export default RadarMap;