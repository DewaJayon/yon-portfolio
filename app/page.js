import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-18 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Web Developer</span>
                        <h1 className="h1 mb-6">
                            Hai👋, saya <br /> <span className="text-accent">Dewa Jayon</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Hai, saya I Dewa Agung Dwitya Kania Prabawa bisa dipanggil dengan
                            <span className="text-accent"> Dewa Jayon</span>. Saya berasal dari Klungkung, Bali. Laravel adalah framework favorit saya. Saya suka membuat aplikasi web yang cepat dan
                            efisien. Saya juga suka belajar hal baru dibidang teknologi dan berbagi pengetahuan dengan orang lain. Saya memiliki pengalaman dalam pengembangan aplikasi web menggunakan
                            berbagai teknologi seperti <span className="text-accent">Laravel, PHP, JavaScript, Tailwind CSS, Bootstrap CSS</span> dan
                            <span className="text-accent"> MySQL</span>.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" className="mr-4 border-accent hover:bg-accent/80 hover:text-gray-900 transition-all ease-in-out duration-500">
                                <FiDownload className="mr-2" />
                                Download CV
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all ease-in-out duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
}
