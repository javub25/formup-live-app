import {Toaster} from 'sonner';
import alert from "@/assets/svg/alert.svg";
import download from "@/assets/svg/download.svg";
import { DroppableList } from "@/components/Droppable/DroppableList";
import { useFormPreview } from "@/hooks/Form/useFormPreview";
import { useDroppableStore } from "@/store/useDroppableStore.ts";
import { ErrorsType } from '@/types/Form/Form.ts';
import { CSVData } from "@/types/Form/CSVData.ts";
import { getErrors } from "@/utils/Form/getErrors";
import { exportCSV } from '@/utils/Form/exportCSV';
import { hasAvailableOptions } from '@/utils/Form/hasAvailableOptions.ts';

export const Preview = () => 
{
    const DroppableItems = useDroppableStore(state => state.DroppableItems);
    const {register, handleSubmit} = useFormPreview();   
    const {OptionsAvailable} = hasAvailableOptions(DroppableItems);

    const onSubmit = (data: CSVData) => exportCSV(data);

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
                            <button className={`w-48 mx-auto flex items-center justify-center mt-8 rounded-md text-white p-2 border border-zinc-200 
                                ${OptionsAvailable ? "bg-black" : "bg-gray-400 cursor-not-allowed"}`} type="submit" disabled={!OptionsAvailable}>
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