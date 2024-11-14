import { useCreateDroppable } from "@/hooks/CreateDroppable/useCreateDroppable";
export const FormBuilder = () => {

    const {setNodeRef} = useCreateDroppable();

    return (
        <div ref={setNodeRef} className="p-8">
            <article className="border-2 border-dashed border-gray-300 p-2 min-h-[200px]">
                <header className="p-8">
                    <h1 className="form-elements-title">Mi Formulario</h1>
                </header>
            </article>
        </div>
    )
}