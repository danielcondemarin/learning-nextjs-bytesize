import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

const ProductCard = ({ productId, description, imgUrl, price }) => {
  const router = useRouter();
  const viewProductDetails = useCallback(() => {
    router.push(`/product/${productId}`);
  }, [router]);

  return (
    <div className="product-card" onClick={viewProductDetails}>
      <div className="product-card-header">
        <img src={imgUrl} />
      </div>
      <div>
        <p className="price-tag">{price}</p>
        <p className="product-description">{description}</p>
      </div>
      <div className="add-to-cart">
        <Link href={`/product/${productId}`}>
          <a>Add to cart</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
