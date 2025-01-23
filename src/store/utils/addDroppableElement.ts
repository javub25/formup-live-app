import { DroppableAddedProps } from "@/types/Droppable/DroppableType.ts";
import {DroppableItemsType} from "@/types/Droppable/DroppableType.ts";

export const addDroppableElement = ({id, label} : DroppableAddedProps) => 
{
     const newDroppable: DroppableItemsType = {
        id, 
        type: label,
        label: "",
    };
    return {newDroppable};
}