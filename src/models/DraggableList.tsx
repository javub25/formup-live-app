import { getUniqueID } from "@/utils/Draggable/getUniqueID";

export const DraggableList = [
    {id: `Email-${getUniqueID()}`, label: "Email"},
    {id: `FullName-${getUniqueID()}`, label: "FullName"},
    {id: `SingleChoice-${getUniqueID()}`, label: "SingleChoice"},
    {id: `MultipleChoice-${getUniqueID()}`, label: "MultipleChoice"}
]