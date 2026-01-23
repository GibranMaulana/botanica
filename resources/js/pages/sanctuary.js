import { footer } from "../animations/Footer";
import { createView } from "../animations/global/createView";
import { Header } from "../animations/Header";
import { HeroSanctuary } from "../animations/HeroSanctuary";
import { ManifestoSanctuary } from "../animations/ManifestoSanctuary";
import { OriginSanctuary } from "../animations/OriginSanctuary";
import { RevealText } from "../animations/RevealText";
import { RitualSanctuary } from "../animations/RitualSanctuary";

export default createView('sanctuary', [
   Header,
   HeroSanctuary,
   OriginSanctuary,
   ManifestoSanctuary,
   RitualSanctuary,
   footer,
])