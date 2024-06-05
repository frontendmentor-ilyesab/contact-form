"use client";

import Form from "@/app/components/form";
import SuccessMessage from "@/app/components/successMessage";

import { useState } from "react";

type State = "initial" | "error" | "success";

export default function Page() {
  const [formState, setFormState] = useState<State>("initial");
  const [emailError, setEmailError] = useState("This field is required");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setFormState("success");
      form.reset();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      setFormState("error");
      const email = form.email;
      if (email.validity.typeMismatch) {
        setEmailError("Please enter a valid email address");
      }
    }
  }

  return (
    <main className="grid w-full place-items-center">
      {formState === "success" && <SuccessMessage />}
      <Form
        emailError={emailError}
        isInvalid={formState === "error"}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
