export const initialState = {
  count: 0
}

export function countReducer(state, action) {
  const { value } = action.payload
  const { x, y } = action.meta
  switch (action.type) {
    case 'INC':
      console.log(`Click: (${x}, ${y})`)
      return { 
        ...state, 
        count: state.count + value
      }
    case 'DEC':
      console.log(`Click: (${x}, ${y})`)
      return { 
        ...state,
        count: state.count - value 
      }
    default:
      throw new Error('Unknown action type')
  }
}