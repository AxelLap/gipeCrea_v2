// import * as React from "react";
// import {
//   FieldValues,
//   FormProvider,
//   SubmitHandler,
//   UseFormReturn,
// } from "react-hook-form";

// type FormProps<T extends FieldValues> = Omit<
//   React.ComponentProps<"form">,
//   "onSubmit"
// > & {
//   form: UseFormReturn<T>;
//   onSubmit: SubmitHandler<T>;
// };

// const CreaForm = <T extends FieldValues>(props: FormProps<T>) => {
//   const { form, onSubmit, children, className, ...rest } = props;

//   return (
//     <FormProvider {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         {...rest}
//         className={className}
//       >
//         <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
//       </form>
//     </FormProvider>
//   );
// };

// export { CreaForm, useZodForm };
