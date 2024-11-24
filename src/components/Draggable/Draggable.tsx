import { DraggableList} from "@/models/DraggableList";
import { DraggableItem } from "@/components/Draggable/DraggableItem.tsx";

export const Draggable = () => 
{
    return DraggableList.map((draggable) => 
    {
        return (
            <DraggableItem 
                key={draggable.id} 
                id={draggable.id} 
                label={draggable.label} 
            /> 
        )
    })
}