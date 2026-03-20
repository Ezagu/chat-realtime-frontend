import { LogOut, Search} from "lucide-react"
import { ChatSection } from "./sections/chat/ChatSection"

function App() {
  return (
    <div className="h-screen w-full bg-background flex justify-center items-center text-text-primary">
      <main className="w-full max-w-6xl h-2/3 bg-surface rounded-2xl grid grid-cols-[3fr_5fr]">

        <aside className="min-w-0 bg-panel rounded-l-2xl border-r border-border">
          <header className="flex w-full items-center border-b border-border px-4 py-2">
            <div className="flex flex-col items-start grow truncate">
              <h1 className="text-2xl font-medium text-start -mb-1">
                Ezagu
              </h1>
              <div className="text-primary flex items-center gap-1">
                <div className="size-1.5 bg-primary rounded-full"></div>
                <p>online</p>
              </div>
            </div>
            <button className="cursor-pointer hover:text-red-500 transition-colors">
              <LogOut />
            </button>
          </header>
          
          <main className="py-2 px-4">
            <label className="flex mb-5 mt-3 bg-card px-4 py-2 rounded-2xl has-[input:focus-within]:outline-primary has-[input:focus-within]:outline-2">
              <Search className="text-text-secondary"/>
              <input 
                className="w-full placeholder:text-text-secondary pl-2 outline-0"
                placeholder="Busca chats o usuarios"
              />
            </label>

            <section className="flex gap-3 flex-col">
              <article className="bg-card hover:bg-card-hover p-2 px-4 border-r-4 border-transparent rounded-xl cursor-pointer">
                <header className="flex gap-2 items-baseline">
                  <h2 className="text-lg font-medium truncate">dkiara</h2>
                </header>
                <main className="flex">
                  <p className="grow truncate">HOLA ESTE ES MI MENSAJEeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                  <span className="ml-2 -mr-2 text-text-secondary">19:53</span>
                </main>
              </article>

              <article className="bg-card hover:bg-card-hover border-r-4 border-primary p-2 px-4 rounded-xl cursor-pointer">
                <header className="flex gap-2 items-baseline">
                  <h2 className="text-lg font-medium truncate">dkiara</h2>
                </header>
                <main className="flex">
                  <p className="grow truncate">HOLA ESTE ES MI MENSAJE</p>
                  <span className="ml-2 -mr-2 text-text-secondary">19:53</span>
                </main>
              </article>
            </section>
          </main>

        </aside>

        <ChatSection user={{id:"asdad", username:"canelona"}} />

      </main>
    </div>
  )
}

export default App
