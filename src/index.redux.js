
const ADD = 'add'
const REMOVE = 'remove'
// 通过reducer建立
// 根据老的state和action 生成新的state
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD:
            return state + 1;
        case REMOVE:
            return state - 1;
        default:
            return 10;
    }
}

/**
 * action creator
 */
export function add() {
    return { type: ADD }
}

export function remove() {
    return { type: REMOVE }
}

export function addAsync() {
    return dispatch => {
        setTimeout(() => dispatch(add()), 2000)
    }
}