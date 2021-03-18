import CategoryTypes from "./category.types";

export const addCategoryStart = (category) => ({
    type: CategoryTypes.ADD_CATEGORY_START,
    payload: category,
});