import {Input, Label} from "@/utils/ShadcnElements.ts"
import { DroppableField } from "@/types/Droppable/DroppableType.ts"
import { getCurrentExpression } from "@/utils/Form/getCurrentExpression.ts";

export const Email = (props: DroppableField) => 
{        
    const {label, validation, register} = props;

    const { messageError, expression} = validation || {};
    
    const regularExp = getCurrentExpression(expression || "")
    
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email" className="mb-2">{label || "Email"}</Label>
            <Input type="email" id="Email" placeholder="Email" 
            
            {...(register && register("Email", {
                pattern: {
                    value: regularExp,   
                    message: messageError || "Invalid email",
                }
            }))}  
            />
        </div>        
    )
}