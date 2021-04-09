import Link from "next/link";
import { useContext } from "react";
import BasketContext from "../components/BasketContext";

const NavbarItem = ({ href, text }) => {
  return (
    <div className="navbar-link">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

const BasketIcon = ({ basketCount }) => {
  const counter =
    basketCount > 0 ? (
      <span className="absolute inset-0 object-right-top -mr-6">
        <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
          {basketCount}
        </div>
      </span>
    ) : undefined;

  return (
    <div className="shopping-cart-icon">
      <Link href="/basket">
        <button
          className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Cart"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          {counter}
        </button>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const { basketProducts } = useContext(BasketContext);

  const basketCount = Object.keys(basketProducts || {}).length;

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <div>
            <Link href="/">
              <a>Next.js E-Commerce</a>
            </Link>
          </div>
        </div>

        <div className="nav-links">
          <div className="nav-links-inner">
            <NavbarItem text={"Shop"} href={"/"} />
          </div>

          <BasketIcon basketCount={basketCount} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
