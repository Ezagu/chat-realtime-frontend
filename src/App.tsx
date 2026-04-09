import { Sidebar } from "./layout/Sidebar"
import { MainPanel } from "./layout/MainPanel"
import { AuthProvider } from "./provider/AuthProvider"

function App() {
  return (
    <div className="h-screen w-full bg-background flex justify-center items-center text-text-primary">
      <main className="w-full max-w-6xl h-2/3 bg-surface rounded-2xl grid grid-cols-[3fr_5fr]">
        <AuthProvider>
          <Sidebar />
          <MainPanel />
        </AuthProvider>
      </main>
    </div>
  )
}

export default App
