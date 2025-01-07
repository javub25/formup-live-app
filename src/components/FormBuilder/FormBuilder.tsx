import trashIcon from "@/assets/svg/trash.svg";
import { DroppableEditor } from "@/components/Droppable/DroppableEditor.tsx";
import { useCreateDroppable } from "@/hooks/CreateDroppable/useCreateDroppable";
import { DroppableType } from "@/types/Droppable/DroppableType.ts";
import { useDroppableStore } from "@/store/useDroppableStore.ts";
import { useShallow } from "@/store/index.ts"


export const FormBuilder = ({IsOver}: DroppableType) => {

    const {setNodeRef} = useCreateDroppable();

    const [DroppableItems, removeDroppable] = useDroppableStore(
        useShallow((state) => [state.DroppableItems, state.removeDroppable]),
    )
    return (
        <div ref={setNodeRef} className="flex-1 md:px-4">
            <article className={`p-2 min-h-[400px] rounded-sm bg-white shadow-md${IsOver ? " border-4 border-green-500" : ''}`}>
                <header className="p-8">
                    <h1 className="form-elements-title text-center">My Form</h1>
                    {!IsOver && <p className="form-elements-description mt-4">Drag and Drop your elements here</p>}
                </header>

                <section>
                    {DroppableItems.map((item) => {
                        return (
                            <div key={item.id} className="droppable-item"> 
                                  <h2 className="font-medium text-black">{item.type}</h2>
                                  <div className="flex w-[60px] justify-between items-center mt-6">
                                     <img src={trashIcon} alt="Delete item" onClick={() => removeDroppable(item.id)}/>
                                        <DroppableEditor id={item.id} label={item.type} />
                                  </div>
                              </div>
                            );
                        })
                    }
                </section>
            </article>
        </div>
    )
}