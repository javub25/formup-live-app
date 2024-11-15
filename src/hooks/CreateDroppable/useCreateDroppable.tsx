{/*useDroppable allows me to register the component as a droppable component*/}
import { useDroppable } from "@dnd-kit/core";
import { getUniqueID } from "@/utils/DragDropID/getUniqueID.tsx";

export const useCreateDroppable = () => 
{
    {/*Each droppable component must have a unique id*/}
    const uuid = getUniqueID();

    {/*setNodeRef allow me to register the component as a droppable component*/}
    const {setNodeRef} = useDroppable({
        id: uuid,
    });

    return { setNodeRef };
}