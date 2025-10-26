
import { Plus, List, SquareKanban, Calendar, Paperclip, SquareChartGantt } from "lucide-react";

export default function TaskHeader() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      {/* Top section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
            LB
          </div>
          <h1 className="text-lg font-semibold">Minhas tarefas</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center space-x-1 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Adicionar uma tarefa</span>
          </button>
        </div>
      </div>

      {/* Tabs section */}
      <div className="flex space-x-6 border-b mb-4 text-gray-600">
        <button className="pb-2 border-b-2 border-blue-600 font-semibold flex items-center gap-1 text-blue-600">
            <List size={15}/>
            Lista
        </button>
        <button className="pb-2 hover:text-gray-800 flex items-center gap-1">
            <SquareKanban size={15}/>
            Kanban
        </button>
        <button className="pb-2 hover:text-gray-800 flex items-center gap-1">
            <Calendar size={15}/>
            Calendario
        </button>
        <button className="pb-2 hover:text-gray-800 flex items-center gap-1">
            <Paperclip size={15}/>
            Arquivos
        </button>
        <button className="pb-2 hover:text-gray-800 flex items-center gap-1">
            <SquareChartGantt size={15}/>
            Gantt
        </button>
        <button className="pb-2 hover:text-gray-800">+</button>
      </div>
    </div>
  );
};


