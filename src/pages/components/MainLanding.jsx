import React from 'react'

import computador from "../../assets/img/computador.png";

import { Element } from "react-scroll";

const HeaderLanding = () => {
  return (
    <div className="p-5 sm:p-10 bg-[#F2F2F2]">
  <Element
    name="beneficios"
    className="w-full flex flex-col md:flex-row justify-evenly items-center mt-10"
  >
    <div className="rounded-full bg-gray-700 bg-opacity-20 p-4 shadow-lg mb-10 md:mb-0">
      <img
        src={computador}
        alt=""
        className="w-60 sm:w-80 md:w-96 hover:scale-105 transition-transform"
      />
    </div>
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-3xl sm:text-4xl text-black font-bold mb-6">
        Por que escolher a{" "}
        <span className="text-4xl sm:text-5xl text-green-400">Cash Saver</span>?
      </h2>
      <ul className="text-base sm:text-lg font-medium space-y-5">
        <li>
          <span className="text-2xl sm:text-3xl md:text-4xl text-green-400 font-semibold">
            Acesso Remoto:
          </span>{" "}
          Mantenha o controle das suas finanças de qualquer lugar do
          mundo, seja em casa, no trabalho ou em viagem, através do
          acesso remoto oferecido pela Cash Saver. Nunca foi tão fácil
          gerenciar suas finanças, onde quer que você esteja.
        </li>
        <li>
          <span className="text-2xl sm:text-3xl md:text-4xl text-green-400">
            Controle Total:
          </span>{" "}
          Com a Cash Saver, tenha controle total sobre suas finanças.
          Monitore suas despesas, acompanhe suas receitas e mantenha-se
          sempre atualizado sobre o seu saldo, garantindo uma gestão
          financeira eficaz e tranquila.
        </li>
        <li>
          <span className="text-2xl sm:text-3xl md:text-4xl text-green-400">
            Facilidade de Uso:
          </span>{" "}
          A Cash Saver oferece uma interface intuitiva e amigável,
          tornando o gerenciamento financeiro uma tarefa simples e
          descomplicada. Mesmo para aqueles que não são especialistas em
          finanças, nossa plataforma é fácil de entender e utilizar.
        </li>
        <li>
          <span className="text-2xl sm:text-3xl md:text-4xl text-green-400">
            Planejamento Financeiro:
          </span>{" "}
          Conte com a Cash Saver para auxiliá-lo no planejamento das suas
          finanças. Defina metas financeiras claras, estabeleça
          orçamentos mensais e acompanhe seu progresso ao longo do
          tempo, garantindo uma saúde financeira sólida e sustentável.
        </li>
        <li>
          <span className="text-2xl sm:text-3xl md:text-4xl text-green-400">
            Segurança Avançada:
          </span>{" "}
          Na Cash Saver, a segurança dos seus dados financeiros é
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