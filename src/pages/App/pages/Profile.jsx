import { useAuthValue } from "@/context/AuthContext.jsx";
import { useAuthentication } from "@/hooks/useAuthentication.jsx";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex items-center justify-center">
          <CircleUserRound className="rounded-full w-32 h-32 border-4 border-gray-700" />
        </div>
        <div className="text-center mt-4 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <p className="mt-2 text-gray-400">
            " A verdadeira motivação vem de realização, desenvolvimento pessoal,
            satisfação no trabalho e reconhecimento "
          </p>
          <div className="mt-4 flex  max-w-20 justify-center gap-7">
            <button
              onClick={logout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sair
            </button>
            <Link to="/apphome" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
