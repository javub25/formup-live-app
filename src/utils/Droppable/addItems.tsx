import {addItemsType} from "@/types/Droppable/DroppableType.tsx";

export const addItems = ({setDroppableItems, currentDraggable}: addItemsType) => 
{
    setDroppableItems((oldDroppable) => {
        const foundItem = oldDroppable.some((item) => item.id === currentDraggable.id);

        return foundItem ? oldDroppable : [...oldDroppable, currentDraggable];
    }); 
}

