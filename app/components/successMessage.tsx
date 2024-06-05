import Image from "next/image";
import successIcon from "@/assets/images/icon-success-check.svg";

export default function SuccessMessage() {
  return (
    <article
      aria-live="polite"
      aria-atomic="true"
      className="grid gap-y-3 rounded-2xl bg-gray-dark p-6 text-white"
    >
      <header className="flex items-center gap-x-2 font-bold">
        <Image
          src={successIcon}
          alt="checkmark icon indicating success with form submission"
        />
        <h2>Message Sent!</h2>
      </header>
      <p className="text-green-light">
        Thanks for completing the form. We&apos;ll be in touch soon!
      </p>
    </article>
  );
}
