import Link from "next/link";

const NavbarItem = ({ href, text }) => {
  return (
    <div className="navbar-link">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

const BasketIcon = () => {
  return (
    <div className="shopping-cart-icon">
      <a href="/basket">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
      </a>
    </div>
  );
};

const Navbar = () => {
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

          <BasketIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
