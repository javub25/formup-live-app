import { EventsType } from "@/types/DndContext/EventsType";
import { DraggableList } from "@/models/DraggableList";

//Would be triggered once the user starts dragging an element.
export const handleDragStart: EventsType["handleDragStart"] = (event, setActiveDraggable)  => {
    //We get the current draggable element id
    const { id } = event.active;
    setActiveDraggable({ id: `${id}`});
};
//Would be triggered each time the user passes the draggable component over the container to be dropped. 
export const handleDragOver: EventsType["handleDragOver"] = (event, setIsOverDroppable) => {
    //We get droppable id
    const {over} = event;
    setIsOverDroppable(over?.id!==undefined && true);
};
//Would be triggered when the user leaves the draggable component on a part of the screen or on the droppable component.
export const handleDragEnd: EventsType["handleDragEnd"] = (event, setIsOverDroppable, setDroppableItems) => {
    //We get droppable and draggable id
    const {active, over} = event;
    setIsOverDroppable(false);

    if(over?.id!==undefined)
    {
        const currentDraggable = DraggableList.find((draggable) => draggable.id === active.id);
        

        if(currentDraggable)
            setDroppableItems(oldDroppable => [...oldDroppable, currentDraggable]);
    }   
};