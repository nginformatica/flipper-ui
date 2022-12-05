// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validator<T>(type: T) {
    return (value: T) => value === type
}
