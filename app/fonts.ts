import { Permanent_Marker, Georama } from "next/font/google";


const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    variable: "--font-permanent-marker",
    weight: "400",
});

const georama = Georama({
    subsets: ["latin"],
    variable: "--font-georama",
    weight: "400",
});

const fonts = { permanentMarker, georama };

export default fonts;
