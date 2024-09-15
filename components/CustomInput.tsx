import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { authformSchema } from "@/lib/utils";
// custom interface
interface CustomInput {
  control: Control<z.infer<typeof authformSchema>>;
  name: "email" | "password";
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
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="form-item">
            <FormControl>
              <Input
                className="inut-class"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
