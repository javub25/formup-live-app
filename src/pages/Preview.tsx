import { useDroppableStore } from "@/store/useDroppableStore.ts";
import { DroppableList } from "@/components/Droppable/DroppableList";
import alert from "@/assets/svg/alert.svg";

export const Preview = () => 
{
    const DroppableItems = useDroppableStore(state => state.DroppableItems);
    

    return (
        <div className="p-4">
            <section className="w-full md:w-[30rem] p-4 shadow-md rounded-sm bg-white mx-auto">
                <header className="py-2">
                    <h1 className="form-elements-title text-center">Form Preview</h1>            
                </header>
            
                {DroppableItems.length === 0 ? (
                    <div className="flex items-center gap-2 justify-center my-4">
                        <img src={alert} alt="Alert icon" />
                        <p className="text-center">There are no form fields to display.</p>
                    </div>
                ) : (
                    <div>
                        {DroppableItems.map((item) => {
                            return (
                                <div key={item.id} className="p-4"> 
                                    <DroppableList 
                                        type={item.type}
                                        label={item.label}
                                        options={item.options} 
                                    />
                                </div>
                            );
                        })
                    }
                    </div>
                )}   
            </section>
        </div>
    )
}