{/*useDraggable allows me to register the component as a draggable component*/}
import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';
import {getUniqueID} from "@/utils/DragDropID/getUniqueID.tsx"

export const useCreateDraggable = () => 
{
    const id = getUniqueID();

    {/*setNodeRef allows me te register a HTML element into draggable area
        listeners allows me to start dragging a element
        attributes allows me to customize draggable elements
        transform allows me to describe how should be move a draggable element
    */}

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    }
    
    return {attributes, listeners, setNodeRef, style};
}