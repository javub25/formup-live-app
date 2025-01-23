import {useState} from "react";
import { ValidationRules } from "@/types/Form/ValidationRules";

export const useValidateRules = () => {
    const [validateRules, setValidateRules] = useState<ValidationRules>( 
        {
            FullName: {
                field: "Validate as a full name",
                expression: "/^[A-ZÁÉÍÓÚÑa-záéíóúñ]+ [A-ZÁÉÍÓÚÑa-záéíóúñ]+$/",
                shownMessageError: false, 
                messageError: "",
            },
            Email: {
                field: "Validate as an email",
                expression: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
                shownMessageError: false,
                messageError: "",
            },
            SingleChoice: {
                field: "Required",
                shownMessageError: false,
                messageError: "",
            },
            MultipleChoice: {
                field: "Required",
                shownMessageError: false,
                messageError: "",
            },
        }
        
    ); 

    return {validateRules, setValidateRules}
}