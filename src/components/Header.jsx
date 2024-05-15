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
          <p className="font-bold text-5xl text-white hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform">
            CASH <span className="text-7xl">SAVER</span>
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
          <div className="flex absolute z-10 w-full justify-center gap-44 bottom-0 bg-black bg-opacity-50 text-white text-lg">
            <Link
              activeClass="active"
              to="beneficios"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Beneficios
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
              <div className="flex w-full h-96 items-center">
                <div className="absolute bg-black bg-opacity-50 ml-20 w-1/2 rounded-3xl p-3">
                  <h2 className="text-4xl text-white font-bold">
                    Com a{" "}
                    <span className="text-6xl text-green-400">Cash Save</span>,
                    controle seus gastos e tenha uma compra tranquila e
                    organizada.
                  </h2>
                </div>
                <img
                  className="h-fit w-full object-cover"
                  src={compras1}
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex  w-full h-96 items-center">
                <div className="absolute bg-black bg-opacity-50 ml-20 w-1/2 rounded-3xl p-1">
                  <h2 className="text-4xl text-white font-bold">
                    Converse com nossos consultores e descubra como se juntar à
                    equipe{" "}
                    <span className="text-6xl text-green-400">Cash Save</span> e
                    economizar. Nosso time está pronto para soluções
                    personalizadas. Entre em contato hoje!
                  </h2>
                </div>
                <img
                  className="h-fit w-full object-cover"
                  src={entrevista}
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex w-full h-96 items-center">
                <div className="absolute bg-black bg-opacity-50 ml-20 w-1/2  rounded-3xl p-3">
                  <h2 className="text-4xl text-white font-bold">
                    Economize para sua viagem dos sonhos! Com a{" "}
                    <span className="text-6xl text-green-400">Cash Save</span>,
                    alcance seus objetivos rapidamente. Comece hoje!
                  </h2>
                </div>
                <img
                  className="h-fit w-full object-cover"
                  src={viagem}
                  alt=""
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
