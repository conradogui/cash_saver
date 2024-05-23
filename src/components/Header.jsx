import Navbar from "./Navbar.jsx";
import { Link } from "react-scroll";

//img
import compras1 from "../assets/img/compras1.jpg";
import entrevista from "../assets/img/entrevista-consultor.jpg";
import viagem from "../assets/img/travel.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex absolute z-10 w-full justify-around bg-black bg-opacity-35">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-white hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform">
            CASH <span className="text-5xl sm:text-6xl md:text-7xl">SAVER</span>
          </p>
          <Navbar />
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 7000,
            }),
          ]}
          className="justify-center block"
        >
          <div className="flex absolute z-10 w-full justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 bottom-0 bg-black bg-opacity-50 text-white text-xs sm:text-sm md:text-base lg:text-lg">
            <Link
              activeClass="active"
              to="beneficios"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Benefícios
            </Link>
            <Link
              activeClass="active"
              to="quemSomos"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Quem somos?
            </Link>
            <Link
              activeClass="active"
              to="avaliacoes"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Avaliações
            </Link>
            <Link
              activeClass="active"
              to="planos"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Planos e preços
            </Link>
          </div>
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-64 sm:h-80 md:h-96 items-center">
                <div className="absolute bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 lg:p-6 lg:mt-28 mt-20 ml-4 sm:ml-10 md:ml-20 w-10/12 sm:w-3/4 md:w-1/2 rounded-2xl md:rounded-3xl">
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-2xl text-white font-bold">
                    Com a{" "}
                    <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400">
                      Cash Saver
                    </span>
                    , controle seus gastos e tenha uma compra tranquila e
                    organizada.
                  </h2>
                </div>
                <img
                  className="h-full w-full object-cover"
                  src={compras1}
                  alt="Compras"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-64 sm:h-80 md:h-96 items-center">
                <div className="absolute bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 lg:p-6 lg:mt-28 mt-20 ml-4 sm:ml-10 md:ml-20 w-10/12 sm:w-3/4 md:w-1/2 rounded-2xl md:rounded-3xl">
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-2xl text-white font-bold">
                    Converse com nossos consultores e descubra como se juntar à
                    equipe{" "}
                    <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400">
                      Cash Saver
                    </span>{" "}
                    e economizar. Nosso time está pronto para soluções
                    personalizadas. Entre em contato hoje!
                  </h2>
                </div>
                <img
                  className="h-full w-full object-cover"
                  src={entrevista}
                  alt="Entrevista"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-64 sm:h-80 md:h-96 items-center">
                <div className="absolute bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 lg:p-6 lg:mt-28 mt-20 ml-4 sm:ml-10 md:ml-20 w-10/12 sm:w-3/4 md:w-1/2 rounded-2xl md:rounded-3xl">
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-2xl text-white font-bold">
                    Economize para sua viagem dos sonhos! Com a{" "}
                    <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400">
                      Cash Saver
                    </span>
                    , alcance seus objetivos rapidamente. Comece hoje!
                  </h2>
                </div>
                <img
                  className="h-full w-full object-cover"
                  src={viagem}
                  alt="Viagem"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
