import './front-end/style/App.css'
import 'leaflet/dist/leaflet.css'
import datas from "./backend/medianAskingRent_All.json"
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    CircleMarker,
  } from 'react-leaflet'


function App() {
    return (
        <div>
            <MapContainer center={[40.73061, -73.935242]} zoom={11}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                datas.map(data => (
                    <CircleMarker center={data.Coordinates} fillOpacity={0.2} fillColor = {"#00FF00"} radius = {35} key={Math.random()} color='auto'>
                    </CircleMarker>
                ))
                }       
            </MapContainer>
        </div>
    )
}


export default App
