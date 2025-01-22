import PromoBanner from "./components/PromoBanner/PromoBanner";
import Header from "./components/Header/Header";
import ProductStandards from "./components/ProductStandards/ProductStandards";
import ProductLabTest from "./components/ProductLabTest/ProductLabTest";
import ProductGiftSleeve from "./components/ProductGiftSleeve/ProductGiftSleeve";
import ProductCorporateGift from "./components/ProductCorporateGift/ProductCorporateGift";
import "./styles/global.css";
import "./styles/variables.css";
import ProductOffering from "./components/ProductOffering/ProductOffering";

const App = () => {
  return (
    <>
      <PromoBanner />
      <Header />
      <ProductLabTest />
      <ProductGiftSleeve />
      <ProductCorporateGift />
      <ProductOffering />
      <ProductStandards />

    </>
  );
};
export default App;
