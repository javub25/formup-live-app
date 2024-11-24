import {useState} from "react";
import { DroppableItems } from "@/types/Droppable/DroppableType"

export const useDroppableItems = () => {
    const [DroppableItems, setDroppableItems] = useState<DroppableItems>([])

    return {DroppableItems, setDroppableItems}
}