import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";


export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  //console.log(
  // cryto.randomUUID().slice(0, 5) +
  // `>>> Rerendered the home page cache with ${products.length} products and ${categories.length} catergories`
  // );


  return (
    <div>
      <h1>WELCOME TO CDXX</h1>
      <div>
     <ProductsView products={products}/>
     </div>
    </div>
  );
}

