import { footer } from "../animations/Footer";
import { createView } from "../animations/global/createView";
import { Header } from "../animations/Header";
import { HeroSanctuary } from "../animations/HeroSanctuary";
import { ManifestoSanctuary } from "../animations/ManifestoSanctuary";
import { RitualSanctuary } from "../animations/RitualSanctuary";
import StorySanctuary from "../animations/StorySanctuary";

export default createView("sanctuary", [
    Header,
    HeroSanctuary,
    StorySanctuary,
    // OriginSanctuary,
    ManifestoSanctuary,
    RitualSanctuary,
    footer,
]);
