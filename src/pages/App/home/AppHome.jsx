//Home components
import Header from "./components/Header.jsx";
import MainSec from "./components/MainSec.jsx";
import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "@/context/AuthContext.jsx";
import { useAuthentication } from "@/hooks/useAuthentication.jsx";

//ui
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AppHome = () => {
  const { logout } = useAuthentication();

  const { user } = useAuthValue();

  return (
    <div className="flex w-full bg-gray-900 text-white">
      <Header />
      <div className="flex flex-col w-full">
        <div className="h-14 flex justify-between ml-5 mr-20 items-center">
          <div className="sm:ml-40 ml-10">
            <p className="text-lg font-semibold">Olá, {user.displayName}!</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleUserRound />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/apphome/profile">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to="/apphome/team">Sobre</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to="/apphome/registerexpense">Registrar despesa</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to="/apphome/registerrecipe">Registrar receita</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button onClick={logout}>Sair</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <MainSec />
      </div>
    </div>
  );
};

export default AppHome;
