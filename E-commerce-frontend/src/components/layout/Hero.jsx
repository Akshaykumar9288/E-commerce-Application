import Banner from "../../assets/images/Banner.png"
import Banner1 from "../../assets/images/Banner1.png"
import Banner2 from "../../assets/images/Banner2.png"
import { useState, useEffect } from "react";
function Hero() {
    const slider = [
        {
            image: Banner,
            title: "Elevate Your Lifestyle with Premium Tech",
            description: "Experience the future of commerce with lightning-fast delivery and curated luxury collections."
        },
        {
            image: Banner1,
            title: "Elevate Your Lifestyle with Premium Cloths",
            description: "Experience the future of commerce with lightning-fast delivery and curated luxury collections."
        },
        {
            image: Banner2,
            title: "Elevate Your Lifestyle with Premium Accesrios",
            description: "Experience the future of commerce with lightning-fast delivery and curated luxury collections."
        }
    ];
    const [currentslider, setCurrentSlider] = useState(0);

    useEffect(() =>{
        console.log("Effect Started");
        setInterval(() => {
            setCurrentSlider((prev) => (prev + 1) % slider.length);
            console.log("Intervel Running");

        }, 3000)
        return () => clearInterval(setCurrentSlider);
    }, [])
    return (
        <>
            <section className="hero-section flex justify-start  w-full h-[600px] bg-black bg-cover bg-center px-[24px]" style={{ backgroundImage: `url(${slider[currentslider].image})` }}>
                <div className="hero-content flex flex-col items-start justify-center text-start text-white max-w-[600px] h-full">
                    <h1 className="text-[48px] font-bold mb-4 leading-[57.6px] tracking-[-0.96px]">{slider[currentslider].title}</h1>
                    <p className="text-lg mb-8">{slider[currentslider].description}</p>
                    <div className="flex gap-[16px]">
                        <button className="bg-[#F90] text-[#653A00] px-[32px] py-[17px] rounded-[8px] text-lg font-semibold hover:bg-[#e68a00] transition duration-300 text-[16px] leading-[24px]">Shop Electronics</button>
                        <button className="rounded-[8px] border border-white/20 bg-white/10 backdrop-blur-[6px] p-4 font-normal text-[16px] leading-[24px]">New Arrivals</button>
                    </div>
                </div>
                {/* <h1>{count}</h1> */}
            </section>
        </>
    )
};
export default Hero;