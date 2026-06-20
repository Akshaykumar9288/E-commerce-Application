import Banner from "../../assets/images/Banner.png"
function Hero() {
    return (
        <>
            <section className="hero-section flex justify-start  w-full h-[600px] bg-black bg-cover bg-center px-[24px]" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-content flex flex-col items-start justify-center text-start text-white max-w-[600px] h-full">
                    <h1 className="text-[48px] font-bold mb-4 leading-[57.6px] tracking-[-0.96px]">Elevate Your Lifestyle with
                        Premium Tech</h1>
                    <p className="text-lg mb-8">Experience the future of commerce with lightning-fast
                        delivery and curated luxury collections.</p>
                    <div className="flex gap-[16px]">
                        <button className="bg-[#F90] text-[#653A00] px-[32px] py-[17px] rounded-[8px] text-lg font-semibold hover:bg-[#e68a00] transition duration-300 text-[16px] leading-[24px]">Shop Electronics</button>
                        <button className="rounded-[8px] border border-white/20 bg-white/10 backdrop-blur-[6px] p-4 font-normal text-[16px] leading-[24px]">New Arrivals</button>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Hero;