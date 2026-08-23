"use client";

import { toast } from "sonner";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { IntroSchema, IntroSchemaGet } from "@/lib/models/homePage.model";
import { useForm } from "@tanstack/react-form";

const introSchema = IntroSchema;

export function IntroForm({
  defaultValues,
}: {
  defaultValues: IntroSchemaGet;
}) {
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: introSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success("form submited successfully");
    },
  });

  return (
    <form
      id="intro-form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field name="title">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Titre</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  autoComplete="off"
                />
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>
    </form>
  );
}
