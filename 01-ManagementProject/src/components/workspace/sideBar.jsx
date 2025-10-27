import { Home, FolderKanban, CheckSquare, Users, Settings, CirclePlus, CircleFadingArrowUp } from "lucide-react";
import { useUIStore } from "../../store/uiStore";

export default function Sidebar() {
  const isOpen = useUIStore((state) => state.isSidebarOpen);
  const active = useUIStore((state) => state.activeMenu);
  const setActive = useUIStore((state) => state.setActiveMenu);

  const menu = [
    { name: "Painel", icon: Home },
    { name: "Projetos", icon: FolderKanban },
    { name: "Tarefas", icon: CheckSquare },
    { name: "Equipe", icon: Users },
    { name: "Configurações", icon: Settings },
  ];

  return (
    <div
      className={`h-[calc(100vh-3.5rem)] bg-gray-900 text-gray-200 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Cabeçalho da sidebar */}
      <div className="h-16 border-b border-gray-800 flex items-center justify-center text-lg font-bold">
        {isOpen ? "Name Company" : <CirclePlus size={24} />}
      </div>

      {/* Menu de navegação */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition-colors ${
              active === item.name
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <item.icon size={20} />
            {isOpen && <span>{item.name}</span>}
          </button>
        ))}
      </nav>

      {/* Rodapé da sidebar */}
      <div className="p-4 border-t border-gray-800">
        <button className="p-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
          {isOpen ? "Fazer upgrade" : <CircleFadingArrowUp size={24} />}
        </button>
      </div>
    </div>
  );
}
