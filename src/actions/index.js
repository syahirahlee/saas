export const search = (val, min, max) => {
    return {
        type: 'search',
        query: val,
        min,
        max,
    }
}