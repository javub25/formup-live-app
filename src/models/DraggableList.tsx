import { getUniqueID } from "@/utils/DragDropID/getUniqueID";

export const DraggableList = [
    {id: `Email-${getUniqueID()}`, label: "Email"},
    {id: `FullName-${getUniqueID()}`, label: "FullName"},
    {id: `SingleChoice-${getUniqueID()}`, label: "SingleChoice"},
    {id: `MultipleChoice-${getUniqueID()}`, label: "MultipleChoice"}
]