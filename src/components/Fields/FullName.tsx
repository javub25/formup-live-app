import {Input, Label} from "@/utils/ShadcnElements.tsx"
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable";
import { updateDescription } from "@/utils/Draggable/Attributes/updateDescription";
import { getUniqueID } from "@/utils/DragDropID/getUniqueID";

export const FullName = () => 
{
    const UUID = getUniqueID();

    const {attributes, listeners, style} = useCreateDraggable({DraggableID: `fullName-${UUID}`})

    updateDescription({attributes, description: "draggable FullName"});
    
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5" {...attributes} {...listeners} style={style}>
            <Label htmlFor="name" className="mb-2">Nombre</Label>
            <Input type="text" id="name" placeholder="Nombre" className="mb-4"/>
            
            <Label htmlFor="surname" className="mb-2">Apellido</Label>
            <Input type="text" id="surname" placeholder="Apellido" />
        </div>
    )
}
