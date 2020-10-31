export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    }
    return 'field is required';
}


export const maxLengthCreator = (length: number) => {
    return (value: string) => {
        if (value && value.length > length) return 'Max length is 30 symbols';
        return undefined
    }
}