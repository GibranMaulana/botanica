import { footer } from "../animations/Footer";
import { createView } from "../animations/global/createView";
import { OriginPhilosophy } from "../animations/OriginPhilosophy";
import { Header } from "../animations/Header";
import SourcePhilosophy from "../animations/SourcePhilosophy";

export default createView("philosophy", [
    Header,
    OriginPhilosophy,
    SourcePhilosophy,
    footer,
]);
