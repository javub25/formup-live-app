import { DragOverEvent, DragStartEvent, DragEndEvent } from "@dnd-kit/core"

export type EventsType = {
    handleDragStart: (
        event: DragStartEvent, 
        setActiveDraggable: (currentDraggable : {DraggableID: string}) => void
    ) => void;

    handleDragOver: (event: DragOverEvent, 
        setIsOverDroppable: (IsOver: boolean) => void
    ) => void;
    handleDragEnd: (event: DragEndEvent, 
        setIsOverDroppable: (IsOver: boolean) => void
    ) => void;
}

