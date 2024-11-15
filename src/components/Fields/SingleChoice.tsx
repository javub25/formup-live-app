import {RadioGroup, RadioGroupItem, Label} from "@/utils/ShadcnElements.tsx";
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable"
import { updateDescription } from "@/utils/Draggable/Attributes/updateDescription";
import { getUniqueID } from "@/utils/DragDropID/getUniqueID";

export const SingleChoice = () => 
{
    const UUID = getUniqueID();

    const {attributes, listeners, style} = useCreateDraggable({DraggableID: `SingleChoice-${UUID}`})
    
    updateDescription({attributes, description: "draggable SingleChoice"});

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