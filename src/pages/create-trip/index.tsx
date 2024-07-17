import {
  MapPin,
  Calendar,
  Settings2,
  ArrowRight,
  X,
  UserRoundPlus,
  AtSign,
  Plus,
  User,
} from "lucide-react";
import { Button } from "../../components/button";
import { DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function CreateTripPage() {
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

  return (
    <main className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>

          {/* Input 1 */}
          <div className="w-[664px] h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                placeholder="Para onde você vai?"
              />
            </div>

            <div className="flex gap-2 items-center">
              <button className="flex items-center gap-2 text-left w-[240px]">
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                  Quando
                </span>
              </button>

              {/* <Button variant="secondary">
                Alterar local/data
                <Settings2 className="size-5" />
              </Button> */}

              <Button variant="primary">
                <span className="font-bold text-base">Continuar</span>
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>

          {/* Input 2 */}
          <div className="w-[664px] h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button className="flex items-center gap-2 flex-1 text-left">
              <UserRoundPlus className="size-5 text-zinc-400" />
              <span className="text-zinc-400 text-lg flex-1">
                Quem estará na viagem?
              </span>
            </button>

            <Button variant="primary">
              <span className="font-bold text-base">Confirmar Viagem</span>
              <ArrowRight className="size-5" />
            </Button>
          </div>

          <p className="text-sm text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <a className="text-zinc-300 underline" href="#">
              termos de uso
            </a>{" "}
            e{" "}
            <a className="text-zinc-300 underline" href="#">
              políticas de privacidade
            </a>
            .
          </p>

          {/* Modal guests */}
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center hidden">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-lg font-semibold">
                    Selecionar convidados
                  </h1>
                  <X className="size-5 text-zinc-400 hover:cursor-pointer hover:text-white" />
                </div>
                <p className="text-sm text-zinc-400 text-left">
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
                </p>

                <div>
                  <div className="flex flex-wrap gap-2">
                    <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex justify-between items-center gap-2">
                      <span className="text-zinc-300">
                        israelcruzz@contato.com
                      </span>
                      <X className="size-4 text-zinc-400" />
                    </div>

                    <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex justify-between items-center gap-2">
                      <span className="text-zinc-300">
                        israelcruzz@contato.com
                      </span>
                      <X className="size-4 text-zinc-400" />
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <form className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <div className="px-2 flex items-center flex-1 gap-2">
                    <AtSign className="text-zinc-400 size-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Digite o email do convidado"
                      className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    />
                  </div>

                  <Button type="submit">
                    Convidar
                    <Plus className="size-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Modal Confirm */}
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center hidden">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-lg font-semibold">
                    Confirmar criação da viagem
                  </h1>
                  <X className="size-5 text-zinc-400 hover:cursor-pointer hover:text-white" />
                </div>
                <p className="text-sm text-zinc-400 text-left">
                  Para concluir a criação da viagem para{" "}
                  <span className="font-semibold text-zinc-100">
                    Florianópolis, Brasil
                  </span>{" "}
                  nas datas de{" "}
                  <span className="font-semibold text-zinc-100">
                    16 a 27 de Agosto de 2024
                  </span>{" "}
                  preencha seus dados abaixo:
                </p>

                <form className="space-y-3">
                  <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <User className="text-zinc-400 size-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    />
                  </div>

                  <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <User className="text-zinc-400 size-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail pessoal"
                      className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    />
                  </div>

                  <Button type="submit" size="full">
                    <span className="font-bold">
                      Confirmar criação da viagem
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Data Picker */}
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[360px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="font-lg font-semibold">Selecione a data</h2>
                  <button>
                    <X className="size-5 text-zinc-400 hover:text-white hover:cursor-pointer" />
                  </button>
                </div>

                <DayPicker
                  locale={ptBR}
                  mode="range"
                  disabled={{
                    before: new Date(
                      new Date().setDate(new Date().getDate() + 1)
                    ),
                  }}
                  selected={eventStartAndEndDates}
                  onSelect={setEventStartAndEndDates}
                  onDayClick={() => console.log(eventStartAndEndDates)}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
