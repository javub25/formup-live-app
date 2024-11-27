
export interface DescriptionType  {
    attributes: {
        "aria-roledescription": string;
    }
    description: string;
}

export interface DraggableType {
    id: string;
}

/*DraggableItemType needs id which already exists in DraggableType.
I'm using extends to add a new properties to join with DraggableID.*/
export interface DraggableItemType extends DraggableType {
    key?: string,
    label: string
}





