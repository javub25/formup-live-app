import { EventsType } from "@/types/DndContext/EventsType";


//Would be triggered once the user starts dragging an element.
export const handleDragStart: EventsType["handleDragStart"] = (event)  => {
    //We get the current draggable element id
    const { id } = event.active;
    alert(id);
};
//Would be triggered each time the user passes the draggable component over the container to be dropped. 
export const handleDragOver: EventsType["handleDragOver"] = (event) => {
    console.log("handleDragOver", event);
};
//Would be triggered when the user leaves the draggable component on a part of the screen or on the droppable component.
export const handleDragEnd: EventsType["handleDragEnd"] = (event) => {
    console.log("handleDragEnd", event);
};

