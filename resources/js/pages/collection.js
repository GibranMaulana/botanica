import { footer } from "../animations/Footer";
import { createView } from "../animations/global/createView";
import { Header } from "../animations/Header";
import { ProductsCollection } from "../animations/ProductsCollection";
// import { CandleScene } from "../animations/CandleScene";
import { ModalProduct } from "../animations/ModalProduct";

export default createView('collection', [
   Header,
   ProductsCollection,
   footer,
   // CandleScene,
   ModalProduct
])