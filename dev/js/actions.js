/*
 * action types
 */

export const CHANGE_PAGE = 'CHANGE_PAGE';


/*
 * action creators
 */

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page,
    };
}