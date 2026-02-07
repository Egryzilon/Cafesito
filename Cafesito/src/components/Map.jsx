import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_CENTER = 
  [-86.84755, 21.04888]

const INITIAL_ZOOM = 10.0

function MapBox() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWdyeXppbG9uIiwiYSI6ImNtbDMwYWd1MzBuZnAzZW9xanQwc3hvbXUifQ.ZVhtSnaAedSVcSTt5qO8VA'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom
    });

  new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([-86.84555053753677, 21.049769429785446])
    .addTo(mapRef.current);

  new mapboxgl.Marker({ color: 'green' })
    .setLngLat([-86.92757134232872, 21.160474978706024])
    .addTo(mapRef.current);

  new mapboxgl.Marker({ color: 'black' })
    .setLngLat([-86.82311247725954, 21.200572044811928])
    .addTo(mapRef.current);

  new mapboxgl.Marker({ color: 'orange' })
    .setLngLat([-86.90666728835639, 21.181231098679227])
    .addTo(mapRef.current);

  new mapboxgl.Marker({ color: 'blue' })
    .setLngLat([-86.83540119815054, 21.13848011409221])
    .addTo(mapRef.current);


    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()

      setCenter([ mapCenter.lng, mapCenter.lat ])
      setZoom(mapZoom)
    })

    return () => {
      mapRef.current.remove()
    }
  }, [])

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM
    })
  }

  return (
    <>
      <div id='map-container' ref={mapContainerRef}>
        <div className="sidebar">
          Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
        </div>

        <button className='reset-button' onClick={handleButtonClick}>
          Reset
        </button>
      </div>
    </>
  )
}

export default MapBox;
