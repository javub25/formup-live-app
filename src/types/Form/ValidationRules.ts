export type ValidationRules = {
    [key: string]: {
        field: string,
        expression?: string,
        shownMessageError: boolean,
        messageError?: string,
    }
}
//Every DroppableItem has only a regular expression and message error to add to the form preview
export type ValidateDroppable = Pick<ValidationRules[string], 'expression' | 'messageError' | 'shownMessageError'>

export type ValidationClicked = {
    e: React.ChangeEvent<HTMLInputElement>, 
    type: string, 
    setValidateRules: (update: (rules: ValidationRules) => ValidationRules) => void
}