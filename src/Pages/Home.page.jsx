import React from "react";

//compoents
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config
import TempPosters from "../components/config/TempPosters.config"

const HomePage =()=>{
    return ( 
    <> 
        <div className ="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">The best of Entertainment</h1>
                <EntertainmentCardSlider/> 
            </div>
            
            <div className="bg-bms-800 py-12">
                
                <div className="container mx-auto px-4 flex flex-col gap-3">
                <div className="md:flex">
                    <div>
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier" className="w-full h-full" />
                    </div>
                    
                </div>
                    <PosterSlider images={TempPosters} title="Premiers" isDark={true} subtitle ="Brand new releases every Friday"/>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false} />
        </div>
       
        <div className="container mx-auto px-4 my-8">
            <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false} />
        </div>
    </>
    );
};

export default HomePage;