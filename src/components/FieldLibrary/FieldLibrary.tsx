import { MultipleChoice } from "@/components/Fields/MultipleChoice.tsx"
import { FullName } from "@/components/Fields/FullName.tsx"
import { SingleChoice } from "@/components/Fields/SingleChoice.tsx"
import { Email } from "@/components/Fields/Email.tsx"

export const FieldLibrary = () => 
{
    return (
        <div className="p-8 text-white">
            <header className="form-elements-header">
                <h1 className="form-elements-title">Elementos de Formulario</h1>
            </header>
            <section className="form-elements-list space-y-6">
                <Email />
                <FullName />
                <SingleChoice />
                <MultipleChoice />
            </section>
        </div>
    )
}