import { DraggableType, DraggableItemType } from "@/types/Draggable/DraggableTypes"

export type DroppableItems = DraggableItemType[];   

export type DroppableType = {
    IsOver: boolean
    DroppableItems: DroppableItems,
    setDroppableItems: addItemsType["setDroppableItems"]
}
export type DroppableListType = DraggableItemType


export type addItemsType = {
    setDroppableItems: (updater: (oldValue: DroppableItems) => DroppableItems) => void,
    currentDraggable: DraggableItemType
}

export type removeItemsType = {
    id: DraggableType["id"]
    setDroppableItems: addItemsType["setDroppableItems"]
}
