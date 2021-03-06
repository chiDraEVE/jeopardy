import * as actions from './index';
import {categories} from "../data/fixtures";

describe('actions',() => {
    it('createas an action to set categories',() => {
        const expectedAction = {
            type: actions.SET_CATEGORIES,
            categories
        };

      expect(actions.setCategories(categories)).toEqual(expectedAction);
    });

    it('creates an action to pick a category',() => {
        const category = categories[0];

        const expectedAction = {
            type: actions.PICK_CATEGORY,
            category
        };
        expect(actions.pickCategory(category)).toEqual(expectedAction);
    });
});