import React from "react"
import Navbar from "../component/navBar";

const SourcePage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-col justify-center m-[10rem] ml-[25rem] mt-[5rem]">
                <h1 className="text-[70px] ml-[10rem]">Sources</h1>
                <ul className="m-[1rem] mb-[2rem] place-content-center text-[2rem]">
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=pop_race_white_pct&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&nty=2018&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Percentage of White People</a></li>
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=pop_race_black_pct&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&ptsb=&nty=2018&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Percentage of Black People</a></li>
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=pop_race_hisp_pct&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&nty=2018&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Percentage of Hispanic People</a></li>
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=pop_race_asian_pct&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&nty=2018&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Percentage of Asian People</a></li>
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=rent_gross_recent_med_adj&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&nty=2013-2017&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Median Rent</a></li>
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=hh_inc_rent_med_adj&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&nty=2018&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Median Household Income</a></li>
                    <li><a href="https://app.coredata.nyc/?mlb=false&ntii=pop_edu_collp_pct&ntr=Sub-Borough%20Area&mz=14&vtl=https%3A%2F%2Fthefurmancenter.carto.com%2Fu%2Fnyufc%2Fapi%2Fv2%2Fviz%2F98d1f16e-95fd-4e52-a2b1-b7abaf634828%2Fviz.json&mln=true&mlp=true&mlat=40.718&nty=2018&mb=roadmap&pf=%7B%22subsidies%22%3Atrue%7D&md=map&mlv=false&mlng=-73.996&btl=Borough&atp=neighborhoods">Population Ages 25+ Whom Have a Bachelor's Degree and Up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SourcePage;