import { DroppableStore } from "@/types/Droppable/DroppableStore.ts"
export const findDroppableIndex = (currentDroppable: DroppableStore["DroppableItems"], type: string) => 
{
    const droppableIndex = currentDroppable.findIndex((item) => item.type === type);
    return {droppableIndex};
}