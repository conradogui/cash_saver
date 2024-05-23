import { Link } from "react-router-dom";
import eu1 from "../../../assets/img/eu1.png";

const Team = () => {
  return (
    <div className="bg-gray-900">
      <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center">
        <div
          name="quemSomos"
          className="w-full flex justify-evenly items-center mt-10"
        >
          <div className="rounded-3xl bg-gray-700 bg-opacity-20 p-4 shadow-lg">
            <img
              src={eu1}
              alt=""
              className="w-56 object-cover h-fit hover:scale-105 transition-transform"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl text-lime-200 font-bold">Quem sou eu?</h2>
            <div className="gap-y-8 flex flex-col">
              <p className="text-base font-medium mt-5">
                Olá, me chamo Guilherme Conrado, criei a Cash Saver com objetivo
                de aprimorar minhas habilidades de criação de interfaces dinâmicas e
                funcionais, com foco em funcionalidades básicas de gerenciamento
                financeiro, como cadastro de saldo e saque. A plataforma oferece
                uma experiência intuitiva aos usuários, com formulários
                simplificados e feedback instantâneo. Integrando recursos como
                React Router, Axios e Tailwind, o projeto prioriza
                escalabilidade e manutenibilidade, proporcionando uma solução
                eficiente e confiável para o gerenciamento das finanças
                pessoais.
              </p>
              <Link
                to="/apphome"
                className="bg-blue-500 w-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
