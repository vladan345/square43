import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LoadingProvider } from "../utils/hooks/LoadingContext";
import HasprCursor from "haspr-cursor";
import "haspr-cursor/dist/cursor.css";
import Spinner from "../components/Spinner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HasprCursor>
        <LoadingProvider>
          <Spinner />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </LoadingProvider>
      </HasprCursor>
    </>
  );
}

export default MyApp;
