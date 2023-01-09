import React from "react";
import ItemReminder from "./children/itemReminder";

export default function ListItems({ arrayElements }) {
  return (
    <ul className="w-full flex flex-col gap-4 text-sm p-6">
      {arrayElements?.length > 0 ? (
        arrayElements.map((item, index) => (
          <ItemReminder key={item.id} item={item} index={index} />
        ))
      ) : (
        <li className="w-full text-center font-bold">Nothing to remember...</li>
      )}
    </ul>
  );
}
