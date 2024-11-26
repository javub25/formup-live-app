{/*useDroppable allows me to register the component as a droppable component*/}
import { useDroppable } from "@dnd-kit/core";

export const useCreateDroppable = () => 
{
    {/*setNodeRef allow me to register the component as a droppable component*/}
    const {setNodeRef} = useDroppable({
        id: 'DroppableArea-98298432165',
    });

    return { setNodeRef };
}