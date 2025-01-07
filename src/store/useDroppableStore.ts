import {create, persist} from "@/store/index.ts"
import { DroppableStore } from "@/types/Droppable/DroppableStore.ts";
import { findDroppableIndex } from "@/store/utils/findDroppableIndex.ts";
import { addDroppableElement } from "@/store/utils/addDroppableElement.ts";

export const useDroppableStore = create<DroppableStore>()(
    persist(
            (set, get) => ({                
                DroppableItems: [],

                addDroppable: (currentDraggable) => 
                {
                    const {id, label} = currentDraggable;
                    
                    const currentDroppable = get().DroppableItems;

                    const {droppableIndex} = findDroppableIndex(currentDroppable, label);

                    if (currentDroppable.length === 0 || droppableIndex === -1) {
                     
                        const {newDroppable} = addDroppableElement(id, label);
                        
                        set({ DroppableItems: [...currentDroppable, newDroppable] });
                    }
                },

                removeDroppable(id) {
                    const currentDroppable = get().DroppableItems;
                    const updatedDroppable = currentDroppable.filter((item) => item.id !== id);
                    
                    set({ DroppableItems: updatedDroppable });
                },
                
                updateDroppable: (formData) => {
                    const {type, label, options} = formData;
                    const currentDroppable = get().DroppableItems;

                    const {droppableIndex} = findDroppableIndex(currentDroppable, type);

                    if(droppableIndex !== -1) {
                        //Update the current droppable received from the form with the new label and options
                         currentDroppable[droppableIndex] = {
                            ...currentDroppable[droppableIndex],
                            label,
                            options
                        }
                        set({ DroppableItems: [...currentDroppable] });
                    }
                }
            }),

            {
                name: 'droppable-storage'
            }
        ),
    )