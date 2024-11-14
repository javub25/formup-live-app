import { Checkbox, Label } from "@/utils/ShadcnElements.tsx";
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable"
import { updateDescription } from "@/utils/Draggable/Attributes/updateDescription";
import { getUniqueID } from "@/utils/DragDropID/getUniqueID";


export const MultipleChoice = () => {
    const items = [
        {
            id: "option1",
            label: "Option 1",
        },
        {
            id: "option2",
            label: "Option 2",
        },
        {
            id: "option3",
            label: "Option 3",
        },
        {
            id: "option4",
            label: "Option 4",
        },
    ];
    const UUID = getUniqueID();

    const {attributes, listeners, style} = useCreateDraggable({DraggableID: `MultipleChoice-${UUID}`})

    updateDescription({attributes, description: "draggable MultipleChoice"});

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5" {...attributes} {...listeners} style={style}>
            {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id} />
                    <Label htmlFor={item.id}>{item.label}</Label>
                </div>
            ))}
        </div>
    )
}