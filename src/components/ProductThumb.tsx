import { Product } from "../../sanity.types";
import Link from 'next/link';


function ProductThumb({ product }: {product: Product }) {
        const isOutOfStock = product.stock != null && product.stock <= 0 ;

        return (
            <Link 
            href = {`/product/${product.slug?.current}`} 
            className={`group flex flex-col bg-white rounded-lg border-gray-200 shadpw-sm hover:shadow transition-all 
            duration-200 overflow-hidden ${isOutOfStock ? "opacity-5-" : ""}`}
            >
            </Link>
        );
}

export default ProductThumb;