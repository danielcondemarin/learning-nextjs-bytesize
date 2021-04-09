import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import useTrolley from "../hooks/use-trolley";

const ProductCard = ({ productId, description, imgUrl, price }) => {
  const router = useRouter();

  const viewProductDetails = useCallback(() => {
    router.push(`/product/${productId}`);
  }, [router]);

  const addToTrolley = useTrolley(productId);

  return (
    <div className="product-card" onClick={viewProductDetails}>
      <div className="product-card-header">
        <Image src={imgUrl} alt={description} width={94.5} height={94.5} />
      </div>
      <div>
        <p className="price-tag">{price}</p>
        <p className="product-description">{description}</p>
      </div>
      <button onClick={addToTrolley}>Add to trolley</button>
    </div>
  );
};

export default ProductCard;
