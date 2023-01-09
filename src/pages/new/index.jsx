import PageLayout from "../../components/PageLayout";
import FormNewReminder from "../../components/FormNewReminder";

export default function New() {
  return (
    <PageLayout titlePage="New reminder...">
      <div className="w-2/3 m-auto">
        <FormNewReminder />
      </div>
    </PageLayout>
  );
}
