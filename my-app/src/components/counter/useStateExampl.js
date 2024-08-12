//state can be string, boolean, number, array

const useState = (initialState) => {
let innerState = initialState

const setState = (newState) => {
initialState = newState
}
return [innerState, setState]

}