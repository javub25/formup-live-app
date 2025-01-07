import { useFieldArray } from "@/utils/Form/index.ts";
import { ControlType } from "@/types/Form/Form.ts";

export const useFormOptions = (control: ControlType) => {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "options"
    });

    const addOption = () => append({value: `Option ${fields.length + 1}`});
    const removeOption = (index: number) => remove(index);

    
    return {fields, addOption, removeOption};
}