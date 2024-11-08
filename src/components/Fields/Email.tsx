import {Input, Label} from "@/utils/ShadcnElements.tsx"

export const Email = () => 
{
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email" className="mb-2">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    )
}