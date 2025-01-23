import { useForm } from "@/utils/Form/index.ts";
import { DroppableItemsType } from "@/types/Droppable/DroppableType";

export const useFormDroppable = () => 
{
    const { register, handleSubmit, control } = useForm<DroppableItemsType>();

    return {register, handleSubmit, control};
}