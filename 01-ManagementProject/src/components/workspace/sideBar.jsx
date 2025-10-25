import { useState } from "react";
import { Home, CheckCircle, Bell, TrendingUp, Folder, Target, Users, Plus,} from "lucide-react";

export default function Sidebar() {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [teamOpen, setTeamOpen] = useState(true);

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between p-4">
      {/* Top Section */}
      <div>
        <button className="flex items-center gap-2 mb-6 px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
          <Plus /> Criar
        </button>

        {/* Navegação principal */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            <Home /> Página inicial
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            <CheckCircle /> Minhas tarefas
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            <Bell /> Caixa de entrada
          </a>
        </nav>

        {/* Insights */}
        <div className="mt-6">
          <h3 className="uppercase text-xs text-gray-400 flex justify-between items-center px-3 mb-2">
            Insights <span className="cursor-pointer">+</span>
          </h3>
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
            >
              <TrendingUp /> Relatórios
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
            >
              <Folder /> Portfólios
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
            >
              <Target /> Metas
            </a>
          </nav>
        </div>

        {/* Projetos */}
        <div className="mt-6">
          <h3
            className="uppercase text-xs text-gray-400 flex justify-between items-center px-3 mb-2 cursor-pointer"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            Projetos <span>{projectsOpen ? "−" : "+"}</span>
          </h3>
          {projectsOpen && (
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
              >
                <div className="w-3 h-3 rounded-full bg-green-400" /> modify
              </a>
            </nav>
          )}
        </div>

        {/* Equipe */}
        <div className="mt-6">
          <h3
            className="uppercase text-xs text-gray-400 flex justify-between items-center px-3 mb-2 cursor-pointer"
            onClick={() => setTeamOpen(!teamOpen)}
          >
            Equipe <span>{teamOpen ? "−" : "+"}</span>
          </h3>
          {teamOpen && (
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 transition"
              >
                <Users /> Engenharia
              </a>
            </nav>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-6 flex flex-col gap-2">
        <button className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 rounded font-semibold text-gray-900 transition">
          Fazer upgrade
        </button>
        <button className="w-full py-2 border border-gray-700 rounded font-semibold hover:bg-gray-800 transition">
          Convidar
        </button>
      </div>
    </div>
  );
}
