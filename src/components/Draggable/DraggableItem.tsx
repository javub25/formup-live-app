import {DraggableItemType} from "@/types/Draggable/DraggableTypes";
import {useCreateDraggable} from "@/hooks/CreateDraggable/useCreateDraggable";
import { updateDescription } from "@/utils/Draggable/Attributes/updateDescription";


export const DraggableItem = (props: DraggableItemType) => 
{
    const {id, label} = props;

    const {attributes, listeners, setNodeRef, style} = useCreateDraggable({id: id});
    
    updateDescription({attributes, description: `draggable ${label}`});

    return <>
        <div ref={setNodeRef} {...attributes}{...listeners} style={style}>
            {label}
        </div>
    </>
}