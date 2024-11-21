import {DraggableItemType} from "@/types/Draggable/DraggableTypes";
import {useCreateDraggable} from "@/hooks/CreateDraggable/useCreateDraggable";
import { updateDescription } from "@/utils/Draggable/Attributes/updateDescription";


export const DraggableItem = (props: DraggableItemType) => 
{
    const {DraggableID, DraggableName} = props;

    const {attributes, listeners, setNodeRef, style} = useCreateDraggable({DraggableID: DraggableID});
    
    updateDescription({attributes, description: `draggable ${DraggableName}`});

    return <>
        <div ref={setNodeRef} {...attributes}{...listeners} style={style}>
            {DraggableName}
        </div>
    </>
}