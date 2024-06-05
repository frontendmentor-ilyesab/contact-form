export default function CheckBox({ id }: { id: string }) {
  return (
    <input
      className="peer size-[18px] shrink-0 appearance-none border border-gray-dark checked:border-none checked:bg-[url('../assets/images/icon-checkbox-check.svg')] focus:outline-green-medium"
      type="checkbox"
      name={id}
      id={id}
      required
    />
  );
}
