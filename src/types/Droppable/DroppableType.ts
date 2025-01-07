import { DraggableType, DraggableItemType } from "@/types/Draggable/DraggableTypes"

export type DroppableType = {
    IsOver: boolean
}

export type DroppableItemsType = {
    id: DraggableType["id"],
    type: "FullName" | "Email" | "SingleChoice" | "MultipleChoice";
    label: string;
    options?: {value: string} []
};

//Omit removes the id from DroppableItemsType keeping the rest of the properties
export type DroppableListType = Omit<DroppableItemsType, 'id'>

//Pick takes the label and options from DroppableItemsType 
export type DroppableField = Pick<DroppableItemsType, 'label' | 'options'>

export type DroppableEditorProps = DraggableItemType;
