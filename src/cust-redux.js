export const createStore = (reducer) => {
    let currentState = {}
    let currentListeners = []

    const getState = () => currentState
    const subscribe = listener => currentListeners.push(listener)
    const dispatch = action => {
        currentState = reducer(currentState, action)
        currentListeners.forEach(listener => listener())
        return action
    }

    dispatch({ type: '@specfic/redux' })
    return { getState, subscribe, dispatch }
}

const bindActionCreator = (creator, dispatch) => (...args) => dispatch(creator(...args))

export const bindActionCreators = (creators, dispatch) => {
    let bound = {}
    Object.keys(creators).forEach(v => {
        let creator = creators[v]
        bound[v] = bindActionCreator(creator, dispatch)
    })
    return bound
}