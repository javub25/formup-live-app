import { useCreateDroppable } from "@/hooks/CreateDroppable/useCreateDroppable";
import { DroppableType } from "@/types/Droppable/DroppableType";
import { DroppableList } from "@/components/Droppable/DroppableList";

export const FormBuilder = ({IsOver, DroppableItems}: DroppableType) => {

    const {setNodeRef} = useCreateDroppable();
    
    return (
        <div ref={setNodeRef} className="flex-1 p-4 md:p-8">
            <article className={`p-2 min-h-[400px] rounded-sm bg-white shadow-md${IsOver ? " border-4 border-green-500" : ''}`}>
                <header className="p-8">
                    <h1 className="form-elements-title text-center">Mi Formulario</h1>
                    {!IsOver && <p className="form-elements-description mt-4">Drag and Drop your elements here</p>}
                </header>

                <section>
                    {DroppableItems.map((item) => {
                        return (
                              <div key={item.id} className="p-4"> 
                                  <DroppableList id={item.id} label={item.label} />
                              </div>
                            );
                        })
                    }
                </section>
            </article>
        </div>
    )
}