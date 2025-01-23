import {Input, Label} from "@/utils/ShadcnElements.ts"
import { DroppableField } from "@/types/Droppable/DroppableType.ts"
import { getCurrentExpression } from "@/utils/Form/getCurrentExpression.ts";

export const FullName = (props: DroppableField) => 
{
    const {label, validation, register} = props;

    const { messageError, expression} = validation || {};

    const regularExp = getCurrentExpression(expression || "")
    
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="mb-2">{label || "FullName"}</Label>
            <Input type="text" id="name" placeholder="Enter your fullname"
            
            {...(register && register("FullName", {
                pattern: {
                    value: regularExp,   
                    message: messageError || "Invalid fullname",
                },
            }))}  
            />
        </div>
    )
}
