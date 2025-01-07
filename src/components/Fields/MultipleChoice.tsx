import { Checkbox, Label } from "@/utils/ShadcnElements.ts";
import { DroppableField } from "@/types/Droppable/DroppableType.ts"

export const MultipleChoice = (props: DroppableField) => {
    const {label, options} = props;

    return (
        <>
            <Label htmlFor="label">{label || "Multiple Choice"}</Label>
            
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
                {options?.map((option, index) => {
                    const {value} = option;

                    return (
                        <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={value} value={value}/>
                            <Label htmlFor={value}>{value}</Label>
                        </div>
                    )
                })}
            </div>        
        </>
    )
}