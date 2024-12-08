import { Build } from "@/pages/Build.tsx"
import { Preview } from "@/pages/Preview.tsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const TabsNavigation = () => {
    return (
        <Tabs defaultValue="build" className="w-full">
            <nav>
                <TabsList className="grid w-[270px] grid-cols-2">
                    <TabsTrigger value="build">Build</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
            </nav>

                <TabsContent value="build">
                    <Build />
                </TabsContent>
                <TabsContent value="preview">
                    <Preview />
                </TabsContent>
        </Tabs>
    )    
}