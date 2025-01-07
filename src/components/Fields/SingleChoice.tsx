import {RadioGroup, RadioGroupItem, Label} from "@/utils/ShadcnElements.ts";
import { DroppableField } from "@/types/Droppable/DroppableType.ts"


export const SingleChoice = (props: DroppableField) => 
{
    const {label, options} = props;

    return (
        <>
            <Label htmlFor="label">{label || "Single Choice"}</Label>
            
            <RadioGroup className="mt-2">
                {options?.map((option, index) => {
                    const {value} = option;

                    return (
                        <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem value={value} id={value} />
                            <Label htmlFor={value}>{value}</Label>
                        </div>
                    )
                })}
            </RadioGroup>
        </>
    )
}