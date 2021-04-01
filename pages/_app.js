import "../styles/base.css";
import "../styles/custom.css";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
