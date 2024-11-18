
export interface DescriptionType  {
    attributes: {
        "aria-roledescription": string;
    }
    description: string;
}

export interface DraggableType {
    DraggableID: string;
}

/*ActiveType only needs DraggableID which already exists in DraggableType.*/
export interface ActiveType {
    DraggableID: DraggableType["DraggableID"];
}

/*DraggableItemType needs DraggableID which already exists in DraggableType.
I'm using extends to add a new properties to join with DraggableID.*/
export interface DraggableItemType extends DraggableType {
    key: string,
    DraggableName: string
}



