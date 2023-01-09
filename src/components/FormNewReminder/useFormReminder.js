import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createReminder, updateReminder } from "../../redux/slices/reminders";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getReminders } from "../../redux/slices/reminders/selectors";

const initialState = {
  title: "",
  description: "",
};

export function useFormReminder() {
  const [reminder, setReminder] = useState(initialState);
  const dispatch = useDispatch();
  const { push, query } = useRouter();
  const reminders = useSelector(getReminders);

  useEffect(() => {
    if (query.id) {
      const foundReminder = reminders.find((remind) => remind.id === query.id);
      setReminder({
        id: foundReminder.id,
        title: foundReminder.title,
        description: foundReminder.description,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminder({ ...reminder, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    !query.id
      ? dispatch(createReminder({ ...reminder, id: uuid() }))
      : dispatch(updateReminder(reminder));

    push("/");
  };

  return { reminder, query, handleChange, handleSave };
}
