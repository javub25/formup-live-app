import { ValidationClicked } from "@/types/Form/ValidationRules.ts";

export const getValidationClicked = (params: ValidationClicked) => 
    {
    const {e, type, setValidateRules} = params;
    const {currentTarget} = e;
    const IsButtonClicked = currentTarget.getAttribute('data-state') === 'checked';

    setValidateRules((rules) => ({
        ...rules, 
        [type]: { ...rules[type], shownMessageError: !IsButtonClicked },
    }));
}