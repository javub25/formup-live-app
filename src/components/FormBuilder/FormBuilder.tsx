import { useCreateDroppable } from "@/hooks/CreateDroppable/useCreateDroppable";
import { DroppableType } from "@/types/Droppable/DroppableType";
import trashIcon from "@/assets/svg/trash.svg";
import { removeItems } from "@/utils/Droppable/removeItems";

export const FormBuilder = ({IsOver, DroppableItems, setDroppableItems}: DroppableType) => {

    const {setNodeRef} = useCreateDroppable();
    
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
                                  <img src={trashIcon} alt="Delete item" className="mt-6"
                                  onClick={() => removeItems({id: item.id, setDroppableItems})}/>
                              </div>
                            );
                        })
                    }
                </section>
            </article>
        </div>
    )
}