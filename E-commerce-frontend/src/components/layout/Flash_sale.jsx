import timerImg from "../../assets/icons/timer.svg";
import right_arrow from "../../assets/icons/right-arrow.svg";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import { useEffect, useState } from "react";
function FlashSale() {
    const products=[
        {
            id:1,
            img: product1,
            name: "SoundMax Pro Wireless",
            price: "$129.00",
            originalPrice: "$329.00",
            discount: "80% OFF"
        },
            {
                id:2,
                img: product2,
                name: "Velocity Watch Series 4",
                price: "$199.00",
                originalPrice: "$350.00",
                discount: "45% OFF"
        },
            {
                id:3,
                img: product3,
                name: "Lumix X5 Mirrorless",
                price: "$899.00",
                originalPrice: "$1200.00",
                discount: "30% OFF"
        },
            {
                id:4,
                img: product4,
                name: "Nitro Run Performance",
                price: "$75.00",
                originalPrice: "$150.00",
                discount: "50% OFF"
        },

        {
                id:4,
                img: product4,
                name: "Nitro Run Performance",
                price: "$75.00",
                originalPrice: "$150.00",
                discount: "50% OFF"
        }
    ]
     const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);
    return (
        <section className="Flash_sale w-full h-[541px] py-[48px] bg-[rgba(255,220,189,0.44)]">
            <div className="flash-sale-container w-full h-full px-[24px] gap-[31px] flex flex-col">
                <div className="w-full h-[42px] flex items-center justify-between">
                    <div className="sales-timer flex w-[312px] items-center justify-between gap-[24px] ">
                        <div className="text-[#191C1D] text-[32px] font-semibold">Flash Sales</div>
                        <div className="timer flex gap-[8px] items-center bg-[#BA1A1A] px-[16px] py-[4px] rounded-[4px]">
                            <img src={timerImg} alt="Timer" />
                            <div className="text-[#191C1D] text-[16px] font-semibold text-white w-[50px] ">{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
                        </div>

                    </div>
                    <div className="flex items-center gap-[8px]">
                        <p className="text-[#0061A3] text-[16px] font-normal"><a href="#!">View All</a></p>
                        <img src={right_arrow} alt="Right Arrow" />
                    </div>
                </div>
                <div className="product-card-section pb-[24px] h-full w-full flex items-center gap-[24px] overflow-hidden">
                    {products.map((product)=>(
                    <div key={product.id} className="product-card px-[16px] py-[16px] min-w-[280px] h-full flex flex-col gap-[4px] items-start bg-[#fff] rounded-[12px] ">
                        <div className="product-image h-[192px] w-full flex justify-center items-center rounded-[8px] bg-[#F8F9FA] relative" style={{ backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="percent-off absolute top-[8px] left-[8px] bg-[#BA1A1A] w-[61px] h-[23px] rounded-[4px] py-[4px] px-[8px] text-white text-[10px] font-bold leading-[15px]"><p>{product.discount}</p></div>
                        </div>
                        <div className="product-name w-full h-[36px] pt-[12px]">
                            <p className="text-[#191C1D] leading-[24px]">{product.name}</p>
                        </div>
                        <div className="product-price h-[24px] w-full flex gap-[8px] items-center">
                            <p className="actual-price text-[#8A5100] font-bold leading-[24px]">{product.price}</p>
                            <p className="actual-price text-[#554434] text-sm  leading-[24px] line-through">{product.originalPrice}</p>
                        </div>
                        <div className="add-to-card-button pt-[20px] pb-[8px] h-[52px] w-full flex justify-center items-center">
                            <a href="#!" className="text-[#0061A3] text-center leading-[24px]">Add to Cart</a>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
};
export default FlashSale;