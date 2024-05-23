import { Element } from "react-scroll";

//img
import eu1 from "../../assets/img/eu1.png";
import mariana from "../../assets/img/mariana.jpg";
import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user3.jpg";
import user4 from "../../assets/img/user4.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ItemLanding = () => {
  return (
    <div>
  <div className="bg-white p-5 sm:p-10">
    <Element
      name="quemSomos"
      className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10"
    >
      <div className="rounded-3xl bg-gray-700 bg-opacity-20 p-4 shadow-lg mb-10 md:mb-0">
        <img
          src={eu1}
          alt=""
          className="w-32 sm:w-40 md:w-48 object-cover h-fit hover:scale-105 transition-transform"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl sm:text-4xl text-black font-bold">Quem somos?</h2>
        <p className="text-base sm:text-lg font-medium mt-5">
          Somos a Cash Save, uma plataforma de gestão financeira que visa
          oferecer controle total sobre as finanças pessoais de nossos
          usuários. Nosso objetivo é proporcionar uma experiência
          simplificada e eficiente no gerenciamento de despesas, receitas
          e metas financeiras. Através de uma interface intuitiva,
          facilitamos o acesso remoto às informações financeiras,
          possibilitando que os usuários monitorem suas finanças de
          qualquer lugar. Além disso, priorizamos a segurança dos dados
          dos nossos usuários, implementando medidas avançadas de
          proteção. Com a Cash Save, buscamos ajudar indivíduos a
          alcançarem uma saúde financeira sólida e sustentável,
          permitindo-lhes controlar suas finanças de forma prática, segura
          e eficaz.
        </p>
      </div>
    </Element>
  </div>
  
  <div className="bg-[#E0E1DD]">
    <Element name="avaliacoes" className="w-full flex justify-center">
      <div className="w-11/12 md:w-10/12 flex flex-col items-center justify-center gap-5 pt-10 sm:pt-20 pb-10 sm:pb-20">
        <h2 className="text-3xl sm:text-4xl text-black font-bold pb-4 sm:pb-8">
          Avaliações:
        </h2>
        <Carousel className="cursor-grab text-base font-medium">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-28">
              <div className="flex flex-col sm:flex-row gap-4  items-center">
                <img src={mariana} alt="" className="w-20 sm:w-28 rounded-full" />
                <p className="sm:text-center flex ">
                  Mariana: "A Cash Saver simplificou minha gestão
                  financeira. Antes, controlar despesas era complicado,
                  mas agora é simples e organizado. Recomendo para quem
                  busca eficiência."
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img src={user1} alt="" className="w-20 sm:w-28 rounded-full" />
                <p>
                  Marcos: "A facilidade de uso da Cash Saver me
                  impressiona. Como leigo em finanças, definir metas e
                  acompanhar meu progresso é rápido e fácil. É como ter um
                  consultor pessoal sempre disponível."
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img src={user2} alt="" className="w-20 sm:w-28 rounded-full" />
                <p>
                  João: "A Cash Saver é indispensável. Acesso fácil e
                  segurança dos dados me deixam tranquila. Estou muito
                  satisfeita com os resultados."
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img src={user3} alt="" className="w-20 sm:w-28 rounded-full" />
                <p>
                  Maria: "A Cash Saver mudou minha vida como empreendedor.
                  Gerencio minhas finanças pessoais e empresariais de
                  forma integrada. Recomendo para empresários."
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img src={user4} alt="" className="w-20 sm:w-28 rounded-full" />
                <p>
                  Letícia: "A Cash Saver tornou realidade meus sonhos
                  financeiros. Com seu planejamento, economizei para minha
                  viagem dos sonhos. Grata por essa ferramenta incrível."
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </Element>
  </div>

  <div className="bg-[#9ba094]">
    <Element name="planos" className="w-full flex justify-center">
      <div className="flex flex-col justify-center items-center p-5 sm:p-10">
        <h2 className="text-3xl sm:text-4xl text-black font-bold mb-5 sm:mb-10">
          Planos e preços:
        </h2>
        <Tabs defaultValue="account" className="w-full sm:w-[900px]">
          <TabsList className="flex justify-center">
            <TabsTrigger value="account" className="mx-2">Mensal</TabsTrigger>
            <TabsTrigger value="password" className="mx-2">Anual</TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="flex flex-col sm:flex-row transition-all gap-8 sm:gap-16 mt-5"
          >
            <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white w-full sm:w-auto">
              <h3 className="font-bold pb-2 text-xl">Free</h3>
              <p>Plataforma web</p>
              <p>Plataforma Mobile</p>
              <p>40 lançamentos/mês</p>
              <p>10 anexos</p>
              <p>Relatorios</p>
              <p>Cartao de credito</p>
            </div>
            <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white w-full sm:w-auto">
              <h3 className="font-bold pb-2 text-xl">Pro</h3>
              <p>Plataforma web</p>
              <p>Plataforma Mobile</p>
              <p>100 lançamentos/mês</p>
              <p>30 anexos</p>
              <p>Relatorios avançados</p>
              <p>Suporte premium</p>
            </div>
            <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white w-full sm:w-auto">
              <h3 className="font-bold pb-2 text-xl">Premium</h3>
              <p>Plataforma web</p>
              <p>Plataforma Mobile</p>
              <p>Lançamentos ilimitados</p>
              <p>Anexos ilimitados</p>
              <p>Relatorios completos</p>
              <p>Consultoria financeira</p>
            </div>
          </TabsContent>
          <TabsContent value="password" className="flex flex-col sm:flex-row transition-all gap-8 sm:gap-16 mt-5">
            <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white w-full sm:w-auto">
              <h3 className="font-bold pb-2 text-xl">Free</h3>
              <p>Plataforma web</p>
              <p>Plataforma Mobile</p>
              <p>40 lançamentos/mês</p>
              <p>10 anexos</p>
              <p>Relatorios</p>
              <p>Cartao de credito</p>
            </div>
            <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white w-full sm:w-auto">
              <h3 className="font-bold pb-2 text-xl">Pro</h3>
              <p>Plataforma web</p>
              <p>Plataforma Mobile</p>
              <p>100 lançamentos/mês</p>
              <p>30 anexos</p>
              <p>Relatorios avançados</p>
              <p>Suporte premium</p>
            </div>
            <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white w-full sm:w-auto">
              <h3 className="font-bold pb-2 text-xl">Premium</h3>
              <p>Plataforma web</p>
              <p>Plataforma Mobile</p>
              <p>Lançamentos ilimitados</p>
              <p>Anexos ilimitados</p>
              <p>Relatorios completos</p>
              <p>Consultoria financeira</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Element>
  </div>
</div>
  )
}

export default ItemLanding