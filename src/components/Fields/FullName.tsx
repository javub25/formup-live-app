import {Input, Label} from "@/utils/ShadcnElements.ts"
import { DroppableField } from "@/types/Droppable/DroppableType.ts"

export const FullName = (props: DroppableField) => 
{
    const {label} = props;
    
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="mb-2">{label || "FullName"}</Label>
            <Input type="text" id="name" placeholder="Enter your fullname"/>
        </div>
    )
}
