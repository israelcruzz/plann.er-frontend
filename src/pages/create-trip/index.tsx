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
import { FormEvent, useState } from "react";
import { format } from "date-fns";

export function CreateTripPage() {
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [modalPickerDate, setModalPickerDate] = useState<boolean>(false);
  const [modalGuestPeopleInvite, setModalGuestPeopleInvite] =
    useState<boolean>(false);
  const [modalConfirmTrip, setModalConfirmTrip] = useState<boolean>(false);
  const [inputGuestPeopleInvite, setInputGuestPeopleInvite] =
    useState<boolean>(false);
  const [guestsInvite, setGuestsInvite] = useState<string[]>([]);
  const [guest, setGuest] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const handleViewInputGuestPeopleInvite = () => {
    if (!destination || !eventStartAndEndDates) return;

    setInputGuestPeopleInvite(true);
  };

  const handleExitViewInputGuestPeopleInvite = () => {
    setInputGuestPeopleInvite(false);
  };

  const handleOpenModalPickerDate = () => {
    setModalPickerDate(true);
  };

  const handleExitModalPickerDate = () => {
    setModalPickerDate(false);
  };

  const handleOpenModalGuestsInvite = () => {
    setModalGuestPeopleInvite(true);
  };

  const handleExitModalGuestsInvite = () => {
    setModalGuestPeopleInvite(false);
  };

  const handleOpenModalConfirmTrip = () => {
    if (guestsInvite.length === 0) return;

    setModalConfirmTrip(true);
  };

  const handleExitModalConfirmTrip = () => {
    setModalConfirmTrip(false);
  };

  const handleRemoveGuest = (guestRemove: string) => {
    const filteredGuests = guestsInvite.filter(
      (guest) => guest !== guestRemove
    );

    setGuestsInvite(filteredGuests);
  };

  const handleIncrementGuest = (event: FormEvent) => {
    event.preventDefault();

    if (guest.length === 0) return;

    const existingGuest = guestsInvite.find((invite) => invite === guest);

    if (existingGuest) return;

    setGuestsInvite((prev) => [...prev, guest]);
    setGuest("");
  };

  const displayDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null;

  const handleSubmitCreateTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const ownerName = formData.get("name");
    const ownerEmail = formData.get("email");

    if (!ownerName || !ownerEmail) return;
  };

  return (
    <main className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>

          <div className="w-[664px] h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                placeholder="Para onde você vai?"
                disabled={inputGuestPeopleInvite}
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
            </div>

            <div className="flex gap-2 items-center">
              <button
                className="flex items-center gap-2 text-left w-[240px]"
                onClick={handleOpenModalPickerDate}
                disabled={inputGuestPeopleInvite}
              >
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                  {displayDate || "Quando"}
                </span>
              </button>

              {inputGuestPeopleInvite === true ? (
                <Button
                  variant="secondary"
                  onClick={handleExitViewInputGuestPeopleInvite}
                >
                  Alterar local/data
                  <Settings2 className="size-5" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleViewInputGuestPeopleInvite}
                >
                  <span className="font-bold text-base">Continuar</span>
                  <ArrowRight className="size-5" />
                </Button>
              )}
            </div>
          </div>

          {inputGuestPeopleInvite && (
            <div className="w-[664px] h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                className="flex items-center gap-2 flex-1 text-left"
                onClick={handleOpenModalGuestsInvite}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1">
                  {guestsInvite.length > 0
                    ? `${guestsInvite.length} pessoa(s) convidada(s)`
                    : "Quem estará na viagem?"}
                </span>
              </button>

              <Button variant="primary" onClick={handleOpenModalConfirmTrip}>
                <span className="font-bold text-base">Confirmar Viagem</span>
                <ArrowRight className="size-5" />
              </Button>
            </div>
          )}

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

          {modalGuestPeopleInvite && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
              <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h1 className="font-lg font-semibold">
                      Selecionar convidados
                    </h1>
                    <X
                      className="size-5 text-zinc-400 hover:cursor-pointer hover:text-white"
                      onClick={handleExitModalGuestsInvite}
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-left">
                    Os convidados irão receber e-mails para confirmar a
                    participação na viagem.
                  </p>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {guestsInvite.map((guest) => {
                        return (
                          <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex justify-between items-center gap-2">
                            <span className="text-zinc-300">{guest}</span>
                            <X
                              className="size-4 text-zinc-400 hover:text-white"
                              onClick={() => handleRemoveGuest(guest)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="w-full h-px bg-zinc-800" />

                  <form
                    className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
                    onSubmit={(e) => handleIncrementGuest(e)}
                  >
                    <div className="px-2 flex items-center flex-1 gap-2">
                      <AtSign className="text-zinc-400 size-5" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Digite o email do convidado"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        onChange={(e) => setGuest(e.target.value)}
                        value={guest}
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
          )}

          {/* Modal Confirm */}
          {modalConfirmTrip && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
              <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h1 className="font-lg font-semibold">
                      Confirmar criação da viagem
                    </h1>
                    <X
                      className="size-5 text-zinc-400 hover:cursor-pointer hover:text-white"
                      onClick={handleExitModalConfirmTrip}
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-left">
                    Para concluir a criação da viagem para{" "}
                    <span className="font-semibold text-zinc-100">
                      {destination}
                    </span>{" "}
                    nas datas de{" "}
                    <span className="font-semibold text-zinc-100">
                      {displayDate}
                    </span>{" "}
                    preencha seus dados abaixo:
                  </p>

                  <form className="space-y-3" onSubmit={handleSubmitCreateTrip}>
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
          )}

          {/* Data Picker */}
          {modalPickerDate && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
              <div className="w-[360px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-lg font-semibold">Selecione a data</h2>
                    <button onClick={handleExitModalPickerDate}>
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
          )}
        </div>
      </div>
    </main>
  );
}
