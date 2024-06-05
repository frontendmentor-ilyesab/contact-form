export default function Label({
  forId,
  text,
  notRequired,
}: {
  forId: string;
  text: string;
  notRequired?: true;
}) {
  return (
    <label
      className="active:cursor-pointer group-hover/radio:cursor-pointer"
      htmlFor={forId}
    >
      {text}
      {!notRequired && <span className="text-green-medium"> *</span>}
    </label>
  );
}
