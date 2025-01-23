import { DraggableList } from "@/data/models/DraggableList";
import { DraggableType } from "@/types/Draggable/DraggableTypes";

export const getActiveElement = (id: DraggableType["id"]) => DraggableList.find((draggable) => draggable.id === id)
