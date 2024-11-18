import { ActiveType } from "@/types/Draggable/DraggableTypes"
import { useState } from "react"

export const useActiveDraggable = () => {
    const [activeDraggable, setActiveDraggable] = useState<ActiveType>({
        DraggableID: "",
    })

    return {activeDraggable, setActiveDraggable}
}