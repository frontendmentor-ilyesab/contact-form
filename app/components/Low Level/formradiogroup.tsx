import RadioInput from "@/app/components/Low Level/radio";
import Label from "@/app/components/Low Level/label";

interface FormRadioGroupProps {
  id: string;
  labelText: string;
  groupName: string;
}

export default function FormRadioGroup({
  id,
  labelText,
  groupName,
}: FormRadioGroupProps) {
  return (
    <div className="group/radio peer flex items-center gap-x-3 rounded-lg border border-gray-dark px-6 py-3.5 focus-within:border-green-medium focus-within:bg-green-light">
      <RadioInput group={groupName} id={id} />
      <Label forId={id} text={labelText} notRequired={true} />
    </div>
  );
}
