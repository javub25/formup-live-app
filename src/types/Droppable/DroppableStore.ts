import { DroppableItemsType } from "@/types/Droppable/DroppableType.ts";
import { DraggableItemType } from "@/types/Draggable/DraggableTypes"

export type DroppableStore = {
    DroppableItems: DroppableItemsType[],
    addDroppable: (currentDraggable: DraggableItemType) => void,
    removeDroppable: (id: DroppableItemsType["id"]) => void,
    updateDroppable: (formData: DroppableItemsType ) => void
}
