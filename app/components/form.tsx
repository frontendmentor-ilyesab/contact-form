import CheckBox from "@/app/components/Low Level/checkbox";
import Label from "@/app/components/Low Level/label";
import Input from "@/app/components/Low Level/input";
import FormRadioGroup from "@/app/components/Low Level/formradiogroup";
import TextArea from "@/app/components/Low Level/textarea";
import Error from "@/app/components/Low Level/error";
import clsx from "clsx";

interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  isInvalid: boolean;
  emailError: string;
}

export default function Form({ onSubmit, isInvalid, emailError }: FormProps) {
  return (
    <form
      className={clsx(
        "group/form grid w-full max-w-[680px] items-start gap-y-7 rounded-2xl bg-white p-6 md:grid-cols-2 md:gap-x-4 md:p-10",
        {
          "form-invalid": isInvalid,
        },
      )}
      noValidate
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <h1 className="col-span-full text-3xl font-bold md:text-4xl">
        Contact Us
      </h1>
      <div className="grid gap-y-2">
        <Label forId="fname" text="First Name" />
        <Input id="fname" />
        <Error error="This field is required" />
      </div>
      <div className="grid gap-y-2">
        <Label forId="lname" text="Last Name" />
        <Input id="lname" />
        <Error error="This field is required" />
      </div>
      <div className="col-span-full grid gap-y-2">
        <Label forId="email" text="Email Address" />
        <Input id="email" email={true} />
        <Error error={emailError} />
      </div>
      <div className="col-span-full grid gap-y-4 md:grid-cols-2 md:gap-x-4">
        <legend className="col-span-full">
          Query Type <span className="text-green-medium">*</span>
        </legend>
        <FormRadioGroup
          id="general"
          labelText="General Enquiry"
          groupName="query-type"
        />
        <FormRadioGroup
          id="support"
          labelText="Support Request"
          groupName="query-type"
        />
        <Error error="Please select a query type" />
      </div>
      <div className="col-span-full grid gap-y-2">
        <Label forId="message" text="Message" />
        <TextArea id="message" />
        <Error error="This field is required" />
      </div>
      <div className="col-span-full my-4 flex items-center gap-x-4 gap-y-2 group-[.form-invalid]/form:flex-wrap">
        <CheckBox id="agree-to-terms" />
        <span className="w-[calc(100%_-18px_-1rem)]">
          <Label
            forId="agree-to-terms"
            text="I consent to being contacted by the team"
          />
        </span>
        <Error error="To submit this form, please consent to being contacted" />
      </div>
      <button
        className="col-span-full rounded-lg bg-green-medium py-4 font-bold text-white hover:cursor-pointer hover:bg-green-dark focus:bg-green-dark focus:outline-none"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
