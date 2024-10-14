"use client";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { authformSchema } from "@/lib/utils";
// custom interface
interface CustomInput {
  control: Control<z.infer<typeof authformSchema>>;
  name: FieldPath<z.infer<typeof authformSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label ">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                className="inut-class"
                placeholder={placeholder}
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            {<FormMessage className="form-message mt-2"></FormMessage>}
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
