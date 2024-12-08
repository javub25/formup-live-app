import { FieldLibrary } from "@/components/FieldLibrary/FieldLibrary"
import { FormBuilder } from "@/components/FormBuilder/FormBuilder"
import { DndContext, DragOverlay} from "@dnd-kit/core"
import { handleDragStart, handleDragOver, handleDragEnd } from "@/utils/Draggable/Events/handleEvents"
import { useActiveDraggable } from "@/hooks/ActiveDraggable/useActiveDraggable.tsx"
import { useOverDroppable } from "@/hooks/OverDroppable/useOverDroppable"
import { useDroppableItems } from "@/hooks/DroppableItems/useDroppableItems"
import { getActiveElement } from "@/utils/Draggable/getActiveElement"

export const Build = () => 
{
  const {activeDraggable, setActiveDraggable} = useActiveDraggable();
  const {id} = activeDraggable;
  const {IsOverDroppable, setIsOverDroppable} = useOverDroppable();
  const {DroppableItems, setDroppableItems} = useDroppableItems()

  return (
    <section className="p-4">
        <DndContext 
            onDragStart={(e) => handleDragStart(e, setActiveDraggable)}
            onDragOver={(e) => handleDragOver(e, setIsOverDroppable)}
            onDragEnd={(e) => handleDragEnd(e, setIsOverDroppable, setDroppableItems)}>

            <aside className="flex flex-col gap-y-4 md:flex-row min-h-screen">
                <FieldLibrary />
                <FormBuilder IsOver={IsOverDroppable} DroppableItems={DroppableItems} setDroppableItems={setDroppableItems}/>
            </aside>  
            
            <DragOverlay>
              {id ? (
                  <div className="bg-white p-2 rounded shadow-lg border-2 border-blue-500">
                    {getActiveElement(id)?.label}
                  </div>
              )
              : null}
            </DragOverlay>     
        </DndContext>
    </section>
  )
}