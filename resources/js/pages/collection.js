import { footer } from "../animations/Footer";
import { createView } from "../animations/global/createView";
import { Header } from "../animations/Header";
import { ProductsCollection } from "../animations/ProductsCollection";

export default createView('collection', [
   Header,
   ProductsCollection,
   footer
])