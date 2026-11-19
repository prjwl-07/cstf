import Link from "next/link";

const PostCard = ({product}) => {
    return (
      <div className="productCard">
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
        <img src={`/${product.image}`} alt={product.name} />
        <Link href={`/products/${product.id}`}>Read More</Link>
      </div>
    );
}

export default PostCard;