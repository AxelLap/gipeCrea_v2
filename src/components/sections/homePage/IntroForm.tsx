"use client";

import { toast } from "sonner";

import { EditableText } from "@/components/admin/EditableText";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
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
      console.log(value);
      toast.success("form submited successfully");
    },
  });

  return (
    <form
      className="h-full w-full flex flex-col items-center justify-center gap-4 relative"
      id="intro-form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        {/* Title */}
        <form.Field name="title">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <EditableText
                  name={field.name}
                  value={field.state.value}
                  onChange={(value) => field.handleChange(value)}
                  ariaInvalid={isInvalid}
                  autoComplete="off"
                />
              </Field>
            );
          }}
        </form.Field>

        {/* P1 */}
        <form.Field name="p1">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <EditableText
                  name={field.name}
                  value={field.state.value}
                  onChange={(value) => field.handleChange(value)}
                  ariaInvalid={isInvalid}
                  autoComplete="off"
                />
              </Field>
            );
          }}
        </form.Field>

        {/* P2 */}
        <form.Field name="p2">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <EditableText
                  name={field.name}
                  value={field.state.value}
                  onChange={(value) => field.handleChange(value)}
                  ariaInvalid={isInvalid}
                  autoComplete="off"
                />
              </Field>
            );
          }}
        </form.Field>

        {/* P3 */}
        <form.Field name="p3">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <EditableText
                  name={field.name}
                  value={field.state.value}
                  onChange={(value) => field.handleChange(value)}
                  ariaInvalid={isInvalid}
                  autoComplete="off"
                />
              </Field>
            );
          }}
        </form.Field>

        {/* Span */}
        <form.Field name="span">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <EditableText
                  highlight
                  name={field.name}
                  value={field.state.value}
                  ariaInvalid={isInvalid}
                  autoComplete="off"
                />
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>
      <form.Subscribe selector={(state) => state.isDirty}>
        {(isDirty) =>
          isDirty && (
            <Button
              className="absolute top-2 right-2"
              variant="outline"
              type="submit"
            >
              Valider
            </Button>
          )
        }
      </form.Subscribe>
    </form>
  );
}
