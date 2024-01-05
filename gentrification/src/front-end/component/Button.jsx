import React from 'react'
import 'leaflet/dist/leaflet.css'
import datas from "../../backend/json_files/real_output.json"

// I want to create a button component that will let the user select the year.
// I will map through the data. and create options that will let me select the year
// I need two select option that will let me select the two year
// when i select two years I need to map through the data
// for each object I need to match the key with the selected year
// I will take that year-value and compare it to the other years value
// if the value is higher then before I need to change the color to red
// if the year is greater but not double greater the year I would need to make the color yellow 
// else I need to keep the color green

export function MyButton({startYear, setStartYear, endYear, setEndYear}){
    const years = []
    for (let i = 2010; i <= 2023; i++) {
        years.push(<option value={i}>{i}</option>)
    }
    const handleStartChange = (event) => {
        setStartYear(event.target.value)
    }
    const handleEndChange = (event) => {
        setEndYear(event.target.value)
    }
    return (
        <div>
            <select value={startYear} className='SelectingYear' key={Math.random() * 1000} onChange={handleStartChange}>
                {years}
            </select>
            <select value={endYear} className='SelectingYear' key={Math.random() * 1000} onChange={handleEndChange}>
                {years}
            </select>
        </div>
    )
}