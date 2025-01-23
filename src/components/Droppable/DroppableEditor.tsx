import pencilIcon from "@/assets/svg/pencil.svg";
import plus from "@/assets/svg/plus.svg";
import trash from "@/assets/svg/trash.svg";
import save from "@/assets/svg/save.svg";
import {Input, Label, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription} from "@/utils/ShadcnElements.ts"
import { DroppableItemsType } from "@/types/Droppable/DroppableType.ts";
import { useFormOptions } from "@/hooks/Form/useFormOptions.ts";
import { useDroppableStore } from "@/store/useDroppableStore.ts";
import { DroppableEditorProps } from "@/types/Droppable/DroppableType.ts";
import { DroppableValidation } from "@/components/Droppable/DroppableValidation.tsx";
import { useFormDroppable } from "@/hooks/Form/useFormDroppable.ts";

export const DroppableEditor = ({label}: DroppableEditorProps) => {
    const {handleSubmit, register, control} = useFormDroppable();
    
    const {fields, addOption, removeOption} = useFormOptions(control);
    
    const updateDroppable = useDroppableStore((state) => state.updateDroppable);

    const onSubmit = (data: DroppableItemsType) => {
        updateDroppable(data);
    }
    return (
            <Sheet>
                <SheetTrigger>
                    <img src={pencilIcon} alt="Edit item"/>
                </SheetTrigger>
                <SheetContent className="w-full overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Edit {label}</SheetTitle>
                        <SheetDescription>
                            Update {label} element
                        </SheetDescription>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <Input type="hidden" {...register("type")} value={label} />
                            <Input type="text" id="title" 
                                placeholder="Enter a title" 
                                className="my-[0.9rem]"
                                {...register('label')} 
                            />

                            <DroppableValidation type={label} register={register} />

                            {(label === "SingleChoice" || label === 'MultipleChoice') && (
                                <>
                                    <article className="py-2">
                                        <Label>Options</Label>
    
                                        {fields.map((field, index) => (
                                            <div key={field.id} className="flex items-center gap-2">
                                                <Input
                                                    type="text"
                                                    {...register(`options.${index}.value`)}
                                                    placeholder={`Option ${index + 1}`}
                                                    className="my-[0.9rem]"
                                                />
                                                <img src={trash} alt="Delete option" 
                                                    className="h-4 w-4" onClick={() => removeOption(index)} 
                                                />
                                            </div>
                                        ))}
                                    </article>
                                    <button className="w-full flex items-center justify-left mb-4 p-2 rounded-md border border-zinc-200"
                                        onClick={() => addOption()} type="button"> 
                                            <img src={plus} alt="Add option" className="h-4 w-4 mr-2"/>Add Option
                                    </button>
                                </>
                            )}
                            <button className="w-full flex items-center justify-center mt-8 bg-black rounded-md text-white p-2 border border-zinc-200" type="submit">
                                <img src={save} alt="Update Droppable" className="h-4 w-4 mr-2"/>Save Changes
                            </button>
                        </form>
                    </SheetHeader>
                </SheetContent>
            </Sheet>      
    )  
};