import {Input, Label} from "@/utils/ShadcnElements.tsx"
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable"

export const Email = () => 
{
    const {attributes, listeners, style} = useCreateDraggable();
   
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5" 
            {...attributes} {...listeners} style={style}>
            <Label htmlFor="email" className="mb-2">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    )
}