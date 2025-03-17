import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";


export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();


 


  return (
    <div className="px-2 py-2">
      <h1>WELCOME TO CDXX</h1>
      <div className='flex flex-col items-center justify-start min-h-screen bg-gray-100'>
     <ProductsView products={products} categories={categories}/>
     </div>
    </div>
  );
}

