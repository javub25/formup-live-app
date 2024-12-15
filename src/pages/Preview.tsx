import { useDroppableStore } from "@/store/useDroppableStore";
import { DroppableList } from "@/components/Droppable/DroppableList";

export const Preview = () => 
{
    const DroppableItems = useDroppableStore(state => state.DroppableItems);

    return (
        <div className="p-4">
            <section className="w-full md:w-[30rem] p-4 shadow-md rounded-sm bg-white mx-auto">
                <header className="py-2">
                    <h1 className="form-elements-title text-center">Mi Formulario</h1>            
                </header>

                <div>
                    {DroppableItems.map((item) => {
                            return (
                                <div key={item.id} className="p-4"> 
                                    <DroppableList id={item.id} label={item.label} />
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}