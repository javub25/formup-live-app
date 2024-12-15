import { DragOverEvent, DragStartEvent, DragEndEvent } from "@dnd-kit/core"
import { DroppableStore } from "@/types/Droppable/DroppableStore";

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
        addItems: DroppableStore["addItems"]        
    ) => void;
}

