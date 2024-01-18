import React from "react";
import picture from "../assets/picture.png"

const SectionHeader = ({ title, children, picture }) => {
    return (
        <section className="w-full bg-black relative h-[55rem]">
            <div className="flex justify-between w-full">
                <header className="text-white text-[90px] font-serif p-[10rem] pb-[20px]">
                    <h1>{title}</h1>
                </header>
                <div className="text-white text-wrap text-balance p-4 pt-[20rem] w-65">
                    {children}
                </div>
            </div>
        </section>
    )
}
 
 const Container1 = () => {
    return (
        <SectionHeader title="Gentrification in New York">
            Gentrification in New York City has increasingly marginalized Black and Brown communities,
            reshaping neighborhoods and altering their cultural fabric.
            As the city experiences rapid development and urban renewal,
            these historically vibrant areas are undergoing significant socioeconomic changes, 
            often leading to the displacement of longtime residents. The process of gentrification, 
            characterized by rising property values, influx of higher-income residents, and commercial revitalization,
            has created an affordability crisis, making it challenging for Black and Brown individuals to afford housing in their own communities.
            This phenomenon not only disrupts established social networks but also threatens cultural identity and erodes the sense of belonging among these marginalized groups.
            As neighborhoods undergo transformation, there's a pressing need for equitable policies and community-driven initiatives to address the adverse impacts
            of gentrification and safeguard the interests of New York City's diverse populations.
        </SectionHeader>
    )
 }

export default Container1;