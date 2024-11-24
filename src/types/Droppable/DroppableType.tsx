import { DraggableItemType } from "@/types/Draggable/DraggableTypes"

export type DroppableItems = DraggableItemType[];   

export type DroppableType = {
    IsOver: boolean
    DroppableItems: DroppableItems
}
export type DroppableListType = DraggableItemType
