import { ActiveType } from "@/types/Draggable/DraggableTypes"
import { useState } from "react"

export const useActiveDraggable = () => {
    const [activeDraggable, setActiveDraggable] = useState<ActiveType>({
        id: "",
    })

    return {activeDraggable, setActiveDraggable}
}