import { footer } from "../animations/Footer";
import { createView } from "../animations/global/createView";
import { Header } from "../animations/Header";
import { CurveLine, LoaderText } from "../animations/loader";
import { ManifestoSanctuary } from "../animations/ManifestoSanctuary";
import { OriginSanctuary } from "../animations/OriginSanctuary";
import { RevealText } from "../animations/RevealText";
import { RitualSanctuary } from "../animations/RitualSanctuary";

export default createView('sanctuary', [
   Header,
   OriginSanctuary,
   ManifestoSanctuary,
   RitualSanctuary,
   footer,
])