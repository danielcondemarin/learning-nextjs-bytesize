const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-inner">
        <div className="product-card-header">
          <img
            src="https://picsum.photos/640/400/?random"
            alt="Placeholder"
            class="rounded-t-xl object-cover h-48 w-full"
          />
          <h2>Tailwind v1.1.0</h2>
          <p>
            Tailwind v1.1.0 has been released with some cool new features and a
            couple of bug fixes. This is the first feature release since the
            v1.0 release, so let's dig into some of the updates.
          </p>
        </div>
        <div className="product-card-footer">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
            </svg>
            <span>View</span>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
            <span>Add to basket</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
