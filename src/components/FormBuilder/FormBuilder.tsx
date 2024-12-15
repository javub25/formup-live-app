import { useCreateDroppable } from "@/hooks/CreateDroppable/useCreateDroppable";
import { DroppableType } from "@/types/Droppable/DroppableType";
import trashIcon from "@/assets/svg/trash.svg";
import { useDroppableStore } from "@/store/useDroppableStore";

export const FormBuilder = ({IsOver}: DroppableType) => {

    const {setNodeRef} = useCreateDroppable();
    const DroppableItems = useDroppableStore(state => state.DroppableItems);
    const removeItems = useDroppableStore(state => state.removeItems);

    
    return (
        <div ref={setNodeRef} className="flex-1 md:px-4">
            <article className={`p-2 min-h-[400px] rounded-sm bg-white shadow-md${IsOver ? " border-4 border-green-500" : ''}`}>
                <header className="p-8">
                    <h1 className="form-elements-title text-center">Mi Formulario</h1>
                    {!IsOver && <p className="form-elements-description mt-4">Drag and Drop your elements here</p>}
                </header>

                <section>
                    {DroppableItems.map((item) => {
                        return (
                            <div key={item.id} className="droppable-item"> 
                                  <h2 className="form-elements-title">{item.label}</h2>
                                     <img src={trashIcon} alt="Delete item" onClick={() => removeItems(item.id)} className="mt-6"/>
                              </div>
                            );
                        })
                    }
                </section>
            </article>
        </div>
    )
}