import { DraggableType } from "@/types/Draggable/DraggableTypes"
import { ValidateDroppable } from "@/types/Form/ValidationRules.ts";
import { UseFormRegisterType, UseFormRegisterCSV } from "@/types/Form/Form.ts";

export type DroppableType = {
    IsOver: boolean
}

export type DroppableItemsType = {
    id: DraggableType["id"],
    type: string;
    label: string;
    options?: {value: string} [], 
    validation?: ValidateDroppable,
    register?: UseFormRegisterCSV
};
//Omit removes the id from DroppableItemsType keeping the rest of the properties
export type DroppableListType = Omit<DroppableItemsType, 'id'>

//Type for every Droppable Field in the Preview Tab
export type DroppableField = Pick<DroppableItemsType, 'label' | 'options' | 'validation' | 'register'>;

export type DroppableEditorProps = Pick<DroppableItemsType, 'id' | 'label'>;

export type DroppableAddedProps = DroppableEditorProps;

export type DroppableValidationProps = Pick<DroppableItemsType, 'type'> & {
    register: UseFormRegisterType
}