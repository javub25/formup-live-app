import { DragOverEvent, DragStartEvent, DragEndEvent } from "@dnd-kit/core"
import {DroppableItems} from "@/types/Droppable/DroppableType"

export type EventsType = {
    handleDragStart: (
        event: DragStartEvent, 
        setActiveDraggable: (currentDraggable : {id: string}) => void
    ) => void;

    handleDragOver: (event: DragOverEvent, 
        setIsOverDroppable: (IsOver: boolean) => void
    ) => void;
    handleDragEnd: (event: DragEndEvent, 
        setIsOverDroppable: (IsOver: boolean) => void,
        setDroppableItems: (updater: (oldValue: DroppableItems) => DroppableItems) => void
        
    ) => void;
}

