const ProductCard = ({ description, imgUrl, price }) => {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <img src={imgUrl} />
      </div>
      <div>
        <p className="price-tag">{price}</p>
        <p>{description}</p>
      </div>
      <div className="add-to-cart">
        <a href="#" className="">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
