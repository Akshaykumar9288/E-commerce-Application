import Logo from "../../assets/logo/WhiteLogo.png"
import SearchIcon from "../../assets/icons/serch_icon.svg"
import Fav from "../../assets/icons/Fav.svg"
import User from "../../assets/icons/User.svg"
import Cart from "../../assets/icons/Cart.svg"
function Header() {
    const navigationItems = ['Deals', 'Categories', 'Orders', 'Sell'];
    return (
        <>
            <section className="Navigation_header flex w-full justify-between items-center h-[71px] self-stretch bg-[#2E3132] shadow-md px-[16px] py-[24px]">
                <div className="flex justify-between items-center w-full">
                    <div className="Logo">
                        <img src={Logo} alt="Logo" className="w-[100px]" />
                    </div>
                    <div className="Navigation flex items-center justify-center">
                        <ul className="flex items-center justify-center gap-[32px]">
                            {navigationItems.map((NavigationItem) => (
                                <li key={NavigationItem} className="text-white text-[16px] font-medium cursor-pointer hover:underline hover:text-[#F90]">{NavigationItem}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center w-full max-w-[448px] h-[39px] bg-white rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            className="flex-1 px-4 text-sm text-gray-500 outline-none"
                        />

                        <button className="flex items-center justify-center w-[50px] h-full bg-[#F90]">
                            <img src={SearchIcon} alt="Search" />
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-[91px] h-[20px] gap-[16px]">
                        <div><img src={Fav} alt="Favourite" /></div>
                        <div><img src={Cart} alt="Cart" /></div>
                        <div><img src={User} alt="User" /></div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};
export default Header;