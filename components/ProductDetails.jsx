const ProductDetails = ({ price, img, description }) => {
  const [priceIntegerPart, priceFractionalPart] = price.split(".");

  return (
    <div className="product-details">
      <div className="product-details-inner">
        <div className="product-details-image">
          <img src={img} />
        </div>
        <div className="product-details-body">
          <h1 className="">{description}</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="product-details-price">
            <span>{priceIntegerPart}</span>
            {priceFractionalPart && (
              <span className="product-details-price-fraction">
                .{priceFractionalPart}
              </span>
            )}
          </div>
          <div className="product-details-add-to-basket">
            <button>
              <i></i> Add to trolley
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
