import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

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
    </main>
  );
}
