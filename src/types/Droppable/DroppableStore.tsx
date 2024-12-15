import { DroppableItems } from "@/types/Droppable/DroppableType";
import { DraggableType, DraggableItemType } from "@/types/Draggable/DraggableTypes"

export type DroppableStore = {
    DroppableItems: DroppableItems,
    addItems: (currentDraggable: DraggableItemType) => void,
    removeItems: (id: DraggableType["id"]) => void
}
