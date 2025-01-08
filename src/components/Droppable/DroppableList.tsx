import {Email} from "@/components/Fields/Email";
import {FullName} from "@/components/Fields/FullName";
import { SingleChoice } from "@/components/Fields/SingleChoice";
import { MultipleChoice } from "@/components/Fields/MultipleChoice";
import { DroppableListType } from "@/types/Droppable/DroppableType";

export const DroppableList = (props: DroppableListType) => {
    const {label, type, options} = props;

    const fields: {[key: string]: React.ReactElement} = {
        "Email": <Email label={label}/>,
        "FullName": <FullName label={label}/>,
        "SingleChoice": <SingleChoice label={label} options={options}/>,
        "MultipleChoice": <MultipleChoice label={label} options={options}/>   
    }
    const CurrentDroppable = () => fields[type];

    return <CurrentDroppable />
}