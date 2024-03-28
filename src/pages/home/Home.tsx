import { Hero } from "../../components/hero/Hero";
import { STATIC_IMAGES } from "../../models/static-images.enum";

export function Home() {
    return (
        <Hero title="Venus Beach Hotel Paphos" imageName={STATIC_IMAGES.HERO}></Hero>
    );
}