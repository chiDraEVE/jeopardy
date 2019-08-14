export const SET_CATEGORIES = 'SET-CATEGRORIES';

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        categories
    }
}