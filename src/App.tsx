import { ChatSection } from "./sections/chat/ChatSection"
import { AsideSection } from "./sections/aside/AsideSection"

function App() {
  return (
    <div className="h-screen w-full bg-background flex justify-center items-center text-text-primary">
      <main className="w-full max-w-6xl h-2/3 bg-surface rounded-2xl grid grid-cols-[3fr_5fr]">
        <AsideSection />
        <ChatSection user={{id:"asdad", username:"canelona"}} />
      </main>
    </div>
  )
}

export default App
