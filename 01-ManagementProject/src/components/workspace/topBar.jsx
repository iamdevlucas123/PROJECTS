import { Menu, Search, HelpCircle, ChevronDown } from "lucide-react";
import { useUIStore } from "../../store/uiStore"; // ajuste o caminho conforme sua pasta

export default function Topbar() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="h-14 bg-[#2e2e2e] flex items-center justify-between px-4 text-gray-200">
      {/* Lado esquerdo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-700 rounded-md"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2 font-semibold text-white text-lg">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
          </div>
          <span>Lumina</span>
        </div>
      </div>

      {/* Campo de busca */}
      <div className="flex-1 max-w-xl mx-6">
        <div className="flex items-center bg-gray-700 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-indigo-500 transition">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Buscar"
            className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-400 px-2 focus:outline-none"
          />
          <div className="flex items-center gap-1">
            <kbd className="bg-gray-600 text-xs px-1.5 py-0.5 rounded">Ctrl</kbd>
            <kbd className="bg-gray-600 text-xs px-1.5 py-0.5 rounded">K</kbd>
          </div>
        </div>
      </div>

      {/* Lado direito */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <HelpCircle size={18} />
        </button>
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-yellow-400 text-gray-900 font-semibold flex items-center justify-center rounded-full">
            LB
          </div>
          <ChevronDown size={18} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
