import { MultipleChoice } from "@/components/Fields/MultipleChoice.tsx"
import { FullName } from "@/components/Fields/FullName.tsx"
import { SingleChoice } from "@/components/Fields/SingleChoice.tsx"
import { Email } from "@/components/Fields/Email.tsx"
import { useCreateDraggable } from "@/hooks/CreateDraggable/useCreateDraggable"

export const FieldLibrary = () => 
{
    const {setNodeRef} = useCreateDraggable({DraggableID: "draggable-parent"});
    
    return (
        <div className="p-8 text-white">
            <header className="form-elements-header">
                <h1 className="form-elements-title">Elementos de Formulario</h1>
            </header>
            <section className="form-elements-list space-y-6" ref={setNodeRef} >
                <Email />
                <FullName />
                <SingleChoice />
                <MultipleChoice />
            </section>
        </div>
    )
}