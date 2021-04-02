import { getBasketProducts } from "../lib/basketDataAccess";

const BasketPage = ({ basketProducts }) => {
  const basketProductElements = basketProducts.map(
    ({ price, description, img }) => (
      <tr key={description}>
        <td class="hidden pb-4 md:table-cell">
          <a href="#">
            <img src={img} class="w-20 rounded" alt="Thumbnail" />
          </a>
        </td>
        <td>
          <a href="#">
            <p class="mb-2 md:ml-4">{description}</p>
            <form action="" method="POST">
              <button type="submit" class="text-gray-700 md:ml-4">
                <small>(Remove item)</small>
              </button>
            </form>
          </a>
        </td>
        <td class="justify-center md:justify-end md:flex mt-6">
          <div class="w-20 h-10">
            <div class="relative flex flex-row w-full h-8">
              <input
                type="number"
                value="2"
                class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
              />
            </div>
          </div>
        </td>
        <td class="text-right">
          <span class="text-sm lg:text-base font-medium">{price}</span>
        </td>
      </tr>
    )
  );

  return (
    <div class="flex justify-center my-6">
      <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">
                    Qtd
                  </span>
                  <span class="hidden lg:inline">Quantity</span>
                </th>
                <th class="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>{basketProductElements}</tbody>
          </table>
          <hr class="pb-6 mt-6" />
          <button class="flex justify-center px-10 py-3 mt-6 text-gray-600 font-medium uppercase bg-yellow-300 rounded-full shadow item-center hover:bg-yellow-400 hover:text-gray-600 focus:shadow-outline focus:outline-none">
            <svg
              class="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
              />
            </svg>
            <span class="ml-2 mt-5px">Proceed to checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const basketProducts = getBasketProducts();

  return {
    props: { basketProducts },
  };
}

export default BasketPage;
