import { useFormReminder } from "./useFormReminder";

import { customClass } from "./utils/customClass";
import Button from "../Button";

export default function FormNewReminder() {
  const { reminder, query, handleChange, handleSave } = useFormReminder();

  return (
    <form
      className="flex flex-col gap-4 mt-8 bg-slate-700 px-4 py-7 rounded-md"
      onSubmit={handleSave}
    >
      <h1 className=" text-base text-slate-300 text-center uppercase font-bold my-4 tracking-wide">{`${
        query.id ? "Editing Reminder..." : "New reminder"
      }`}</h1>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className={`${customClass}`}
        onChange={handleChange}
        value={reminder.title}
      />
      <textarea
        name="description"
        cols="30"
        placeholder="Description"
        className={`${customClass}`}
        onChange={handleChange}
        value={reminder.description}
      />
      <Button
        className="m-auto disabled:opacity-30 cursor-pointer mt-4"
        disabled={!reminder.title}
      >
        Save
      </Button>
    </form>
  );
}
