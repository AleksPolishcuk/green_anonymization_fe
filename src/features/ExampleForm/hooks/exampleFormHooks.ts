import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

export const useExampleForm = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("SUBMIT WORKS", data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
