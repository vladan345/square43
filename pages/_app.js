import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HasprCursor from "haspr-cursor";
import "haspr-cursor/dist/cursor.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HasprCursor>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HasprCursor>
    </>
  );
}

export default MyApp;
