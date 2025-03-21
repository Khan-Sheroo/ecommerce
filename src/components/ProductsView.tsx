import { Category, Product } from "../../sanity.types";
import ProductGrid from "./ProductGrid";
interface ProductsViewProps {
    products: Product[];
    categories: Category[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
    return <div className="flex flex-col">
                    {/* categories */}
                <div className="w-full sm:w-[200px]">
                    {/* <CategoriesSelectionComponent catergories={categories}/> */}
                    <div>
                    {/* products */}
                    <div className="flex-1">
                        <ProductGrid products={products} />
                    <hr className="w-1/2 sm:w-3/4"/>
                </div>
            </div>
        </div>
    </div>
};

export default ProductsView;