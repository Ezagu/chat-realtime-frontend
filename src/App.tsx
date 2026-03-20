import { Check, CheckCheck, LogOut, Search, Send } from "lucide-react"
import { Message } from "./components/Message"

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

        <main className="min-w-0 flex flex-col">
          <header className="flex flex-col px-4 py-2 bg-panel rounded-tr-2xl ">
            <div className="flex flex-col items-start grow truncate">
              <h1 className="text-2xl font-medium text-start -mb-1">
                dkiara
              </h1>
              <div className="text-text-secondary flex items-center gap-1">
                <div className="size-1.5 bg-text-secondary rounded-full"></div>
                <p>offline</p>
              </div>
            </div>
          </header>

          <section className="flex flex-col-reverse grow">
            <Message 
              timeStamp="19:53" 
              messageText="Hola este es un mensaje muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy largooooooooooooooooooooooooo"
              isMine={true}
              read={false}
            />
            <Message 
              timeStamp="19:53" 
              messageText="Hola este es un mensaje muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy largooooooooooooooooooooooooo"
              isMine={true}
              read={true}
            />
            <Message 
              timeStamp="19:53" 
              messageText="Hola este es un mensaje"
              isMine={false}
              read={false}
            />
          </section>

          <footer className="bg-panel rounded-br-2xl">
            <form className="flex">
              <input type="text" placeholder="Send a message..." className="bg-card text-lg px-4 py-1 grow m-2 rounded-4xl placeholder:text-text-secondary outline-0"/>
              <button className="m-2 ml-0 size-10 flex items-center justify-center bg-primary-dark rounded-full hover:bg-primary-deeper cursor-pointer transition-colors hover:text-text-secondary">
                <Send className="mr-0.5 mt-1"/>
              </button>
            </form>
          </footer>

        </main>

      </main>
    </div>
  )
}

export default App
