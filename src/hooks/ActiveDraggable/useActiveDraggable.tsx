import { DraggableType } from "@/types/Draggable/DraggableTypes"
import { useState } from "react"

export const useActiveDraggable = () => {
    const [activeDraggable, setActiveDraggable] = useState<DraggableType>({
        id: "",
    })

    return {activeDraggable, setActiveDraggable}
}