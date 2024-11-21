import { Draggable } from "@/components/Draggable/Draggable";

export const FieldLibrary = () => 
{    
    return (
        <div className="p-8 text-white">
            <header className="form-elements-header">
                <h1 className="form-elements-title">Elementos de Formulario</h1>
            </header>
            <section className="form-elements-list space-y-6">
                <Draggable />               
            </section>
        </div>
    )
}