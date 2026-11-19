import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Products</h1>
      <div className='ProductDiv'>
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
}
