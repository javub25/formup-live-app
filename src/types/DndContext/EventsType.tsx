import { DragOverEvent, DragStartEvent, DragEndEvent } from "@dnd-kit/core"

export type EventsType = {
    handleDragStart: (event: DragStartEvent) => void;
    handleDragOver: (event: DragOverEvent) => void;
    handleDragEnd: (event: DragEndEvent) => void;
}

