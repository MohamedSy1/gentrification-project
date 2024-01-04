import './front-end/style/App.css'
import 'leaflet/dist/leaflet.css'
import datas from "./backend/json_files/real_output.json"
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    CircleMarker,
  } from 'react-leaflet'

import { MyButton } from "./front-end/component/Button"
import { useState } from 'react'






function App() {
    const [startYear, setStartYear] = useState("2010")
    const [endYear, setEndYear] = useState("2015")


    
    return (
        <div>
            <MapContainer center={[40.73061, -73.935242]} zoom={11}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                datas.map(data => (
                    <CircleMarker center={data.coordinates} fillOpacity={0.2} fillColor={"#00FF00"} radius={35} key={Math.random()} color='auto'>
                    </CircleMarker>
                ))
                }
            </MapContainer>
            <MyButton startYear={startYear} setStartYear={setStartYear} endYear={endYear} setEndYear={setEndYear}></MyButton>
            
        </div>
    )
}


export default App
