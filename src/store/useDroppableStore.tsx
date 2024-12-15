import { create } from "zustand";
import {persist} from "zustand/middleware"
import { DroppableStore } from "@/types/Droppable/DroppableStore.tsx";

export const useDroppableStore = create<DroppableStore>()(
    persist(
            (set, get) => ({
                DroppableItems: [],

                addItems: (currentDraggable) => 
                {
                    const dashIndex = currentDraggable.id.indexOf('-')

                    set((state) => {
                        const foundItem = state.DroppableItems.some(item => item.id.slice(0, dashIndex) === currentDraggable.id.slice(0, dashIndex));

                        return foundItem ? state : { DroppableItems: [...state.DroppableItems, currentDraggable] };
                    });
                },

                removeItems(id) {
                    const previousDroppable = [...get().DroppableItems];
       
                    const currentDroppable = previousDroppable.filter(item => item.id !== id);
      
                    set({DroppableItems: [...currentDroppable]}) 
            }}),
            {
                name: 'droppable-storage'
            }
        ),
    )