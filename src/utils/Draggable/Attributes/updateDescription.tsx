
import { DescriptionType } from "@/types/Draggable/DraggableTypes.tsx"

export const updateDescription = (params: DescriptionType) => {
    const {attributes, description} = params;
    
    attributes["aria-roledescription"] = description
}