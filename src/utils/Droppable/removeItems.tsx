import { removeItemsType } from "@/types/Droppable/DroppableType.tsx";

export const removeItems = (params: removeItemsType) => {
    const {id, setDroppableItems} = params;
    setDroppableItems(oldDroppable => oldDroppable.filter(item => item.id !== id));
}