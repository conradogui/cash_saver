import React from 'react'

import computador from "../../assets/img/computador.png";

import { Element } from "react-scroll";

const HeaderLanding = () => {
  return (
    <div className="p-10 bg-[#F2F2F2]">
    <Element
      name="beneficios"
      className="w-full flex justify-evenly items-center mt-10"
    >
      <div className="rounded-full bg-gray-700 bg-opacity-20 p-4 shadow-lg">
        <img
          src={computador}
          alt=""
          className="w-96  hover:scale-105 transition-transform"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-4xl text-black font-bold">
          Por que escolher a{" "}
          <span className="text-5xl text-green-400">Cash Save</span> ?
        </h2>
        <ul className="text-base font-medium space-y-5">
          <li className="mt-5">
            <span className="text-4xl text-green-400 font-semibold">
              Acesso Remoto:
            </span>{" "}
            Mantenha o controle das suas finanças de qualquer lugar do
            mundo, seja em casa, no trabalho ou em viagem, através do
            acesso remoto oferecido pela Cash Save. Nunca foi tão fácil
            gerenciar suas finanças, onde quer que você esteja.
          </li>
          <li>
            <span className="text-4xl text-green-400">
              Controle Total:
            </span>{" "}
            Com a Cash Save, tenha controle total sobre suas finanças.
            Monitore suas despesas, acompanhe suas receitas e mantenha-se
            sempre atualizado sobre o seu saldo, garantindo uma gestão
            financeira eficaz e tranquila.
          </li>
          <li>
            <span className="text-4xl text-green-400">
              Facilidade de Uso:
            </span>{" "}
            A Cash Save oferece uma interface intuitiva e amigável,
            tornando o gerenciamento financeiro uma tarefa simples e
            descomplicada. Mesmo para aqueles que não são especialistas em
            finanças, nossa plataforma é fácil de entender e utilizar.
          </li>
          <li>
            <span className="text-4xl text-green-400">
              Planejamento Financeiro:
            </span>{" "}
            Conte com a Cash Save para auxiliá-lo no planejamento das suas
            finanças. Defina metas financeiras claras, estabeleça
            orçamentos mensais e acompanhe seu progresso ao longo do
            tempo, garantindo uma saúde financeira sólida e sustentável.
          </li>
          <li>
            <span className="text-4xl text-green-400">
              Segurança Avançada:
            </span>{" "}
            Na Cash Save, a segurança dos seus dados financeiros é
            prioridade. Utilizamos medidas avançadas de proteção para
            garantir a confidencialidade e integridade das suas
            informações, proporcionando a você tranquilidade e confiança
            enquanto utiliza nossos serviços.
          </li>
        </ul>
      </div>
    </Element>
  </div>
  )
}

export default HeaderLanding