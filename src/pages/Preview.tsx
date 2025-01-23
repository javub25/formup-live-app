import {Toaster} from 'sonner';
import { ErrorsType } from '@/types/Form/Form.ts';
import { getErrors } from "@/utils/Form/getErrors";
import { useDroppableStore } from "@/store/useDroppableStore.ts";
import { DroppableList } from "@/components/Droppable/DroppableList";
import alert from "@/assets/svg/alert.svg";
import { useFormPreview } from "@/hooks/Form/useFormPreview";
import { CSVData } from "@/types/Form/CSVData.ts";
import download from "@/assets/svg/download.svg";

export const Preview = () => 
{
    const DroppableItems = useDroppableStore(state => state.DroppableItems);
    const {register, handleSubmit} = useFormPreview();

    const onSubmit = (data: CSVData) => console.log(data);
    
    const onError = (errors: ErrorsType) => getErrors(errors)

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
                    <>
                        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                            {DroppableItems.map((item) => {
                                    return (
                                        <div key={item.id} className="p-4"> 
                                            <DroppableList 
                                                type={item.type}
                                                label={item.label}
                                                options={item.options}
                                                validation={item.validation}
                                                register={register}
                                            />
                                        </div>
                                    );
                                })
                            }
                            <button className="w-48 mx-auto flex items-center justify-center mt-8 bg-black rounded-md text-white p-2 border border-zinc-200" type="submit">
                                <img src={download} alt="Export CSV" className="h-4 w-4 mr-2" />
                                Export CSV
                            </button>
                        </form>
                        <Toaster richColors position="top-right"/>
                    </>
                )}   
            </section>
        </div>
    )
}