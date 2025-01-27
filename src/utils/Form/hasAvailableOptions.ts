import { DroppableItemsType } from "@/types/Droppable/DroppableType";

export const hasAvailableOptions = (DroppableItems: DroppableItemsType[]) => {
    const OptionsAvailable = ['SingleChoice', 'MultipleChoice'].every(type => {
        const item = DroppableItems.find(item => item.type === type);
        return !item || (Array.isArray(item.options) && item.options.length > 0);
    });

    return {OptionsAvailable}
}