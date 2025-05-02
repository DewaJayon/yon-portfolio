import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import StairsTransition from "@/components/StairsTransition";
import StairEffect from "@/components/StairEffect";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrains-mono",
});

export const metadata = {
    title: "Dewa Jayon",
    description: "Portfolio website Dewa Jayon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className={jetBrainsMono.variable}>
                <Header />
                <StairEffect />
                <StairsTransition>{children}</StairsTransition>
            </body>
        </html>
    );
}
