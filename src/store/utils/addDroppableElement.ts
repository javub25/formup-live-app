import { DroppableItemsType } from "@/types/Droppable/DroppableType.ts";

export const addDroppableElement = (id: DroppableItemsType["id"], label: DroppableItemsType["label"]) => 
{
     const newDroppable: DroppableItemsType = {
        id, 
        type: label as DroppableItemsType["type"],
        label: "",
    };
    return {newDroppable};
}