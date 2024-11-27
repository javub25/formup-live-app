import { DraggableList } from "@/models/DraggableList";
import { DraggableType } from "@/types/Draggable/DraggableTypes";

export const getActiveElement = (id: DraggableType["id"]) => DraggableList.find((draggable) => draggable.id === id)
