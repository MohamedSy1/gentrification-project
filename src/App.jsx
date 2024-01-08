import './front-end/style/index.css'
import 'leaflet/dist/leaflet.css'
import datas from "./backend/json_files/real_output.json"
import Navbar from './front-end/component/navBar'
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
    GeoJSON,
  } from 'react-leaflet'
import { MyButton } from "./front-end/component/Button"
import { useState } from 'react'
import Container1 from "./front-end/component/container1"

function App() {
    const [startYear, setStartYear] = useState("2010")
    const [endYear, setEndYear] = useState("2015")
    const calculatePercentage = (areaName: object) => {
        const rentStart =  Number(areaName[startYear])
        const rentEnd = Number(areaName[endYear])
        if (rentStart == 0 || rentEnd == 0) {
            return 0
        } else {
            const percentageIncrease = (rentEnd - rentStart) / rentEnd * 100 
            return percentageIncrease;
        }
    }

    const changeColor = (percentIncrease: number) => {
        if (percentIncrease <= 5) return "#00FF00"
        if (percentIncrease <= 10) return "#7FFF00"
        if (percentIncrease <= 15) return "#BFFF00"
        if (percentIncrease <= 20) return "#FFFF00"
        if (percentIncrease <= 25) return "#FFBF00"
        else {
            return "#FF0000"
        }
    }

    return (
        <div>
            <Navbar/>
            <Container1/>
            <section>
                <MapContainer className='flex flex-row justify-center' center={[40.73061, -73.935242]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer 
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    /> 
                    {
                    datas.map((data, index) => {
                        let rentIncrease = calculatePercentage(data)
                        let color = changeColor(rentIncrease)
                        return (
                            <CircleMarker center={data.coordinates} fillOpacity={0.2} fillColor={color} radius={35} key={Math.random() * 1000} color='auto'>
                                <Popup>Percent Increase: {Math.floor(rentIncrease)}% || {data.areaName}</Popup>
                            </CircleMarker>
                        )
                        })
                    }
                </MapContainer>
                <MyButton startYear={startYear} setStartYear={setStartYear} endYear={endYear} setEndYear={setEndYear}></MyButton>
            </section>
        </div>
    )
}

export default App
