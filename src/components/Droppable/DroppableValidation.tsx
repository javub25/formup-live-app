import {Input, Label} from "@/utils/ShadcnElements.ts"
import { getValidationClicked } from "@/utils/Form/getValidationClicked.ts"
import { useValidateRules } from "@/hooks/Form/useValidateRules.ts";
import { DroppableValidationProps } from "@/types/Droppable/DroppableType.ts";

export const DroppableValidation = (props: DroppableValidationProps) => {
    const {type, register} = props;

    const {validateRules, setValidateRules} = useValidateRules();
    const {field, shownMessageError, expression} = validateRules[type];

    return (
        <>
            <div className="flex items-center space-x-2 my-4">
                <Input 
                    type="checkbox"
                    {...register("validation.shownMessageError")} 
                    data-state={shownMessageError ? 'checked' : 'unchecked'}
                    className="border-0 shadow-none w-5"
                    onChange={(e) => getValidationClicked({e, type, setValidateRules})}
                />
                <Label htmlFor={field}>{field}</Label>
            </div>

           {shownMessageError &&
                <>
                   {expression &&
                        <Input type="hidden" 
                            {...register("validation.expression")} 
                            value={expression} 
                        />  
                   }       
                    <Label className="mt-4">Write your custom message error</Label>
                    <Input type="text" className="mt-[0.9rem]" 
                        {...register("validation.messageError")}
                    />
                </>
            }         
        </>
    )
}