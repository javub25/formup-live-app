import {Input, Label} from "@/utils/ShadcnElements.ts";
import { DroppableField } from "@/types/Droppable/DroppableType.ts"
import { getCurrentRequired } from "@/utils/Form/getCurrentRequired";

export const SingleChoice = (props: DroppableField) => 
{
    const {label, options, validation, register} = props;

    const { messageError, shownMessageError } = validation || {shownMessageError: false};
    
    const {isRequired} = getCurrentRequired(shownMessageError);

    return (
        <>
            <Label htmlFor="label">{label || "Single Choice"}</Label>
            
            <div className="mt-2">
                {options?.map((option, index) => {
                    const {value} = option;

                    return (
                        <div key={index} className="flex items-center space-x-2">
                           <Input type="radio" id={value} value={value} className="border-0 shadow-none w-5"
                                {...(register && register("SingleChoice", {
                                    required: {
                                        value: isRequired,
                                        //If the field is required, the message will be displayed, otherwise I show the default message
                                        message: isRequired && messageError || "SingleChoice Required",
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