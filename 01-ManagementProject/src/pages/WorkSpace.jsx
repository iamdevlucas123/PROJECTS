import Sidebar from "../components/workspace/sideBar";
import Topbar from "../components/workspace/topBar";
import TaskHeader from "../components/workspace/tasksHeader";
import KanbanBoard from "../components/workspace/KanbanBoard";
import { useUIStore } from "../store/uiStore";
import { useState } from "react";

export default function WorkSpace() {
  const activeMenu = useUIStore((state) => state.activeMenu);
  const [activeTab, setActiveTab] = useState("Lista");
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 h-[calc(100vh-3.5rem)] overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {activeMenu === "Projetos" && (
            <>
              <TaskHeader activeTab={activeTab} onTabChange={setActiveTab} />
              {activeTab === "Kanban" && <KanbanBoard />}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
