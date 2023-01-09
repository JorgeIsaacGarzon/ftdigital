import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getReminders } from "../redux/slices/reminders/selectors";

import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import ListItems from "../components/ListItems";

export default function Home() {
  const router = useRouter();
  const reminders = useSelector(getReminders);

  const addNewHandleClick = () => router.push("/new");

  return (
    <PageLayout titlePage="Home">
      <div className="w-full h-12 flex justify-between items-center bg-slate-900 px-8 py-10 rounded-md">
        <div className=" flex flex-col items-start justify-center">
          <h1 className="font-bold uppercase">Reminders</h1>
          <span className="italic text-xs">
            {reminders?.length === 0
              ? "empty..."
              : `${reminders.length} items...`}
          </span>
        </div>
        <Button className="" onClick={addNewHandleClick}>
          <div className="w-full p-2 flex items-center justify-center gap-2">
            <span className=" text-sm">Add</span>
            <FaPlus />
          </div>
        </Button>
      </div>

      <ListItems arrayElements={reminders} />
    </PageLayout>
  );
}
