import Sidebar from "../components/workspace/sideBar";
import Topbar from "../components/workspace/topBar";
import TaskHeader from "../components/workspace/tasksHeader";

export default function WorkSpace() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 h-[calc(100vh-3.5rem)] overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <TaskHeader />
        </main>
      </div>
    </div>
  )
}
