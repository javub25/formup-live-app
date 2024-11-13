import {RadioGroup, RadioGroupItem, Label} from "@/utils/ShadcnElements.tsx";
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable"


export const SingleChoice = () => 
{
    const {attributes, listeners, style} = useCreateDraggable();

    return (
        <RadioGroup defaultValue="option-one" {...attributes} {...listeners} style={style}>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
            </div>
        </RadioGroup>
    )
}