import {Input, Label} from "@/utils/ShadcnElements.ts";
import { DroppableField } from "@/types/Droppable/DroppableType.ts"
import { getCurrentRequired } from "@/utils/Form/getCurrentRequired";

export const MultipleChoice = (props: DroppableField) => {
    const {label, options, validation, register} = props;

    const { messageError, shownMessageError } = validation || {shownMessageError: false};
    
    const {isRequired} = getCurrentRequired(shownMessageError);
    
    return (
        <>
            <Label htmlFor="label">{label || "Multiple Choice"}</Label>
            
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
                {options?.map((option, index) => {
                    const {value} = option;

                    return (
                        <div key={index} className="flex items-center space-x-2">
                            <Input id={value} value={value} type="checkbox" className="border-0 shadow-none w-5"
                             {...(register && register("MultipleChoice", {
                                required: {
                                    value: isRequired,
                                    //If the field is required, the message will be displayed, otherwise I show the default message
                                    message: isRequired && messageError || "MultipleChoice Required", 
                                }
                            }))}
                            />
                            <Label htmlFor={value}>{value}</Label>
                        </div>
                    )
                })}
            </div>      
        </>
    )
}