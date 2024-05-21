//components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeaderLanding from "./components/MainLanding.jsx";
import ItemLanding from "./components/ItemLanding.jsx";

const Home = () => {
  return (
    <div>
      <Header />
        <HeaderLanding />
        <ItemLanding/>
      <Footer />
    </div>
  );
};

export default Home;
