import { CSVData } from "@/types/Form/CSVData.ts";
import { DroppableItemsType } from "@/types/Droppable/DroppableType.ts";
import {Control, UseFormRegister, FieldErrors} from "react-hook-form";

export type ControlType = Control<DroppableItemsType>;
export type UseFormRegisterType = UseFormRegister<DroppableItemsType>;
export type UseFormRegisterCSV = UseFormRegister<CSVData>;
export type ErrorsType = FieldErrors<CSVData>;
