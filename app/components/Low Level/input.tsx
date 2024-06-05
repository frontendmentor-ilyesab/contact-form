interface InputProps {
  id: string;
  email?: true;
}

export default function Input({ id, email }: InputProps) {
  return (
    <input
      className="peer rounded-lg border border-gray-dark px-6 py-3.5 hover:cursor-pointer hover:border-green-medium focus:border-green-medium focus:outline-none active:border-green-medium group-[.form-invalid]/form:invalid:border-red"
      type={email ? "email" : "text"}
      name={id}
      id={id}
      required
    />
  );
}
