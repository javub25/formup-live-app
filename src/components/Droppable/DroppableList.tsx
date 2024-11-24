import {Email} from "@/components/Fields/Email";
import {FullName} from "@/components/Fields/FullName";
import { SingleChoice } from "@/components/Fields/SingleChoice";
import { MultipleChoice } from "@/components/Fields/MultipleChoice";
import { DroppableListType } from "@/types/Droppable/DroppableType";

export const DroppableList = (props: DroppableListType) => {
    const {label} = props;

    const fields: {[key: string]: React.ReactElement} = {
        "Email": <Email />,
        "FullName": <FullName />,
        "SingleChoice": <SingleChoice />,
        "MultipleChoice": <MultipleChoice />   
    }
    const CurrentDroppable = () => fields[label];

    return <CurrentDroppable />
}