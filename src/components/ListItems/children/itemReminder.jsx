import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { FaTrashAlt } from "react-icons/fa";
import { deleteReminder } from "../../../redux/slices/reminders";

export default function ItemReminder({ item, index }) {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const handleClickReminder = () => push(`/edit/${item.id}`);
  const handleClickDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteReminder(item.id));
  };

  return (
    <li
      className="w-full flex justify-between items-center p-4  bg-slate-700 rounded-md shadow-xl hover:bg-slate-600 cursor-pointer"
      onClick={handleClickReminder}
    >
      <div className="flex gap-4">
        <div className=" font-bold text-2xl">{`${index + 1}.`}</div>
        <div>
          <h2 className="font-bold">{item.title}</h2>
          <span className=" text-xs italic ml-1">{item.description}</span>
        </div>
      </div>
      <div>
        <button
          className="flex items-center justify-center bg-red-800 hover:bg-red-500 p-2 rounded-md"
          onClick={handleClickDelete}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
}
