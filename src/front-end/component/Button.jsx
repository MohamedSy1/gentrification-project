import React from 'react'
import 'leaflet/dist/leaflet.css'
import datas from "../../backend/json_files/real_output.json"

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
        <div className='flex items-center justify-center pb-[5rem] pl-[15rem] text-[black]' >
            <div className='flex flex-row gap-[2rem] mt-3'>
                <select className="rounded-lg h-[2.5rem] bg-transparent border border-solid border-[#000000] shadow-lg font-bold" palceholder="Start year" value={startYear} key={Math.random() * 1000} onChange={handleStartChange}>
                    {years}
                </select>
                <select value={endYear} className="rounded-lg h-[2.5rem] bg-transparent border border-solid border-[#000000] shadow-lg text-[#000000] font-bold" key={Math.random() * 1000} onChange={handleEndChange}>
                    {years}
                </select>
            </div>

        </div>
    )
}