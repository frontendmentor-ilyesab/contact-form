export default function Error({ error }: { error: string }) {
  return (
    <span
      aria-live="polite"
      aria-atomic="true"
      className="hidden text-red group-[.form-invalid]/form:peer-invalid:block group-[.form-invalid]/form:[.peer:has(:invalid)~&]:block"
    >
      {error}
    </span>
  );
}
