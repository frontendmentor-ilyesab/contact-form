interface RadioInputProps {
  group: string;
  id: string;
}

export default function RadioInput({ group, id }: RadioInputProps) {
  return (
    <input
      className="size-5 h-[21px] appearance-none rounded-full border border-gray-dark checked:border-none checked:bg-[url('../assets/images/icon-radio-selected.svg')] focus:outline-none group-hover/radio:cursor-pointer"
      type="radio"
      name={group}
      id={id}
      required
    />
  );
}
