import {Input, Label} from "@/utils/ShadcnElements.tsx"
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable"
import { updateDescription } from "@/utils/Draggable/Attributes/updateDescription";
import { getUniqueID } from "@/utils/DragDropID/getUniqueID";

export const Email = () => 
{
    const UUID = getUniqueID();

    const {attributes, listeners, style} = useCreateDraggable({DraggableID: `email-${UUID}`});
    
    updateDescription({attributes, description: "draggable email"});
    
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5" 
            {...attributes} {...listeners} style={style}>
            <Label htmlFor="email" className="mb-2">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>        
    )
}