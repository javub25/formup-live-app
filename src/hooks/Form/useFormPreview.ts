import { useForm } from "@/utils/Form/index.ts";
import { CSVData } from "@/types/Form/CSVData.ts"
export const useFormPreview = () => 
{
    const { register, handleSubmit} = useForm<CSVData>({
        reValidateMode: "onSubmit"
    });
    
    return {register, handleSubmit};
}