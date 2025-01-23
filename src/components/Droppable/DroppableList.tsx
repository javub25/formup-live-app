import {Email} from "@/components/Fields/Email";
import {FullName} from "@/components/Fields/FullName";
import { SingleChoice } from "@/components/Fields/SingleChoice";
import { MultipleChoice } from "@/components/Fields/MultipleChoice";
import { DroppableListType } from "@/types/Droppable/DroppableType";

export const DroppableList = (props: DroppableListType) => {
    const {label, type, options, validation, register} = props;


    const fields: {[key: string]: React.ReactElement} = {
        "Email": <Email label={label} validation={validation} register={register}/>,
        "FullName": <FullName label={label} validation={validation} register={register}/>,
        "SingleChoice": <SingleChoice label={label} options={options} validation={validation} register={register}/>,
        "MultipleChoice": <MultipleChoice label={label} options={options} validation={validation} register={register}/>   
    }
    const CurrentDroppable = () => fields[type];

    return <CurrentDroppable />
}