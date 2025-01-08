import { useForm } from "@/utils/Form/index.ts";
import { FormData } from "@/types/Form/Form.ts";

export const useCreateForm = () => 
{
    const { register, handleSubmit, control } = useForm<FormData>();

    return {register, handleSubmit, control};
}