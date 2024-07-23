interface ActivityProps {
  occurs: Date
}

export const Activity = ({ occurs }: ActivityProps) => {
  return (
    <main>
      <div className="flex gap-2">
        <h3 className="text-zinc-50 text-xl font-semibold">Dia 17</h3>
        <span className="text-zinc-500 text-sm self-end">Sábado</span>
      </div>

      <p className="text-zinc-500 text-base">
        Nenhuma atividade cadastrada nessa data.
      </p>
    </main>
  );
};
