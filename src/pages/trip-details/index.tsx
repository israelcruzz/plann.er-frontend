import { Calendar, MapPin, Plus, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { AcitivityItem } from "../../components/activity-item";
import { Activity } from "../../components/activity";

export function TripDetails() {
  return (
    <main className="max-w-[1100px] mx-auto mt-10">
      <header className="flex justify-between items-center bg-zinc-900 rounded-xl shadow-shape pl-6 pr-4 py-4">
        <div className="flex items-center gap-2">
          <MapPin size={24} className="size-5 text-zinc-400" />
          <span className="text-zinc-100 text-lg">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100 text-lg">17 a 23 de Agosto</span>
          </div>

          <div className="bg-zinc-800 w-[1px] h-6"></div>

          <Button variant="secondary">
            Alterar local/data
            <Settings2 className="size-5" />
          </Button>
        </div>
      </header>

      <div>
        <section>
          <div className="flex justify-between">
            <h1 className="text-[32px] text-zinc-50 font-bold">Atividades</h1>
            <Button variant="primary">
              <Plus size={20} />
              <span className="font-semibold">Cadastrar Atividade</span>
            </Button>
          </div>

          <div>
            <Activity
              occurs={new Date()}
              activities={[
                {
                  title: "Academia em Grupo",
                  done: true,
                  id: "2321124",
                  occurs_at: new Date(),
                },
                {
                  title: "Kart",
                  done: true,
                  id: "2321124",
                  occurs_at: new Date(),
                },
              ]}
            />

            <div>
              <h3>Dia 18</h3>
              <span>Domingo</span>

              <AcitivityItem name="Corrida de Kart" occurs={new Date()} done />
            </div>
          </div>
        </section>

        <section></section>
      </div>
    </main>
  );
}
