import { dayjs } from "../../lib/dayjs";
import { AcitivityItem } from "../activity-item";

interface Activity {
  id: string;
  title: string;
  occurs_at: Date;
  done: boolean;
}

interface ActivityProps {
  occurs: Date;
  activities?: Activity[];
}

export const Activity = ({ occurs, activities }: ActivityProps) => {
  return (
    <main className="flex flex-col gap-3">
      <div className="flex gap-2">
        <h3 className="text-zinc-50 text-xl font-semibold">
          {"Dia" + " " + dayjs(occurs).format("DD")}
        </h3>
        <span className="text-zinc-500 text-sm self-end">
          {dayjs(occurs).format("dddd")}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {!activities ? (
          <p className="text-zinc-500 text-base">
            Nenhuma atividade cadastrada nessa data.
          </p>
        ) : (
          activities!.map((activity, i) => {
            return (
              <AcitivityItem
                key={i}
                name={activity.title}
                occurs={activity.occurs_at}
                done={activity.done}
              />
            );
          })
        )}
      </div>
    </main>
  );
};
