import Electronic_Category from "../../assets/images/Electronic_categroy.jpg";
import Cloth from "../../assets/images/Cloth_Category.jpg";
import Home from "../../assets/images/Home_Category.jpg";
import Beauty from "../../assets/images/Beauty_Category.jpg";
import Books from "../../assets/images/Books_category.jpg";
function Category() {
    const categories = [
        {
            id: 1,
            image: Electronic_Category,
            categoryName: "Electronics"
        },
        {
            id: 2,
            image: Cloth,
            categoryName: "Fashion"
        },
        {
            id: 3,
            image: Home,
            categoryName: "Home"
        },
        {
            id: 4,
            image: Beauty,
            categoryName: "Beauty"
        },
        {
            id: 5,
            image: Books,
            categoryName: "Books"
        }
    ]
    return (
        <section className="Category w-full h-[337px] py-[47px]">
            <div className="sub-category px-[24px] w-full h-full flex flex-col  items-center gap-[32px]">
                <h2 className="text-[#191C1D] text-[32px] font-semibold leading-[41.6px]">Shop by Category</h2>
                <div className="category-list w-full h-full flex items-center justify-center gap-[32px]">
                    {categories.map(category => (
                        <div key = {category.id  } className="category-box w-[128px] h-[168px] bg-cover bg-center rounded-full ">
                            <div className="pb-[16px]"><img className="rounded-full" src={category.image} /> </div>
                            <p className="text-center">{category.categoryName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Category;