import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
