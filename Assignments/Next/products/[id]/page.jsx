import products from '../../../data/products.json';
import Link from 'next/link'

const ProductDetail = async ({params}) => {
    const {id} = await params;
    const product = products.find((p) => p.id == id);

    if(!product){
        return (
            <div>
                <p>Product Not Found</p>
                <Link href="/">Back to Home</Link>
            </div>
        );
    } 
    
    return(
        <div className='productDetail'>
            <Link href="/">Back to Home</Link>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail;