export default function TextArea({ id }: { id: string }) {
  return (
    <textarea
      className="peer min-h-64 resize-none rounded-lg border border-gray-dark px-6 py-3.5 hover:cursor-pointer hover:border-green-medium focus:border-green-medium focus:outline-none group-[.form-invalid]/form:invalid:border-red md:min-h-28"
      name={id}
      id={id}
      spellCheck="false"
      required
    ></textarea>
  );
}
