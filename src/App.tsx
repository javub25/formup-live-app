import { FieldLibrary } from "@/components/FieldLibrary/FieldLibrary"
import { FormBuilder } from "@/components/FormBuilder/FormBuilder"
import { DndContext} from "@dnd-kit/core"
import { handleDragStart, handleDragOver, handleDragEnd } from "@/utils/DragEvents/handleEvents"

function App() {

  return (
    <main>
      {/*Context to share data between Draggable (FielLibrary) and Droppable (FormBuilder)*/}
        <DndContext 
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}>
              <FieldLibrary />
              <FormBuilder />
        </DndContext>
    </main>
  )
}
export default App