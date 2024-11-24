import { FieldLibrary } from "@/components/FieldLibrary/FieldLibrary"
import { FormBuilder } from "@/components/FormBuilder/FormBuilder"
import { DndContext} from "@dnd-kit/core"
import { handleDragStart, handleDragOver, handleDragEnd } from "@/utils/Draggable/Events/handleEvents"
import { useActiveDraggable } from "@/hooks/ActiveDraggable/useActiveDraggable.tsx"
import { useOverDroppable } from "@/hooks/OverDroppable/useOverDroppable"
import { useDroppableItems } from "@/hooks/DroppableItems/useDroppableItems"


function App() {

  const {activeDraggable, setActiveDraggable} = useActiveDraggable();
  const {id} = activeDraggable;
  const {IsOverDroppable, setIsOverDroppable} = useOverDroppable();
  const {DroppableItems, setDroppableItems} = useDroppableItems()

  console.log(DroppableItems);

  return (
    <main>
        <DndContext 
            onDragStart={(e) => handleDragStart(e, setActiveDraggable)}
            onDragOver={(e) => handleDragOver(e, setIsOverDroppable)}
            onDragEnd={(e) => handleDragEnd(e, setIsOverDroppable, setDroppableItems)}>
              
            <FieldLibrary />
            <FormBuilder IsOver={IsOverDroppable} DroppableItems={DroppableItems}/>
            <p>{id}</p>
          </DndContext>
    </main>
  )
}
export default App