export const getCurrentRequired = (shownMessageError: boolean) => {
    const isRequired = shownMessageError ? true : false;
    return {isRequired}
}