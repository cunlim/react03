export const initialState = {
  name: '',
  year: '',
  warning: ''
}

export function userReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { 
        ...state, 
        name: action.payload.trim().toLowerCase() }
    case 'SET_YEAR':
      const age
       = new Date().getFullYear() - action.payload
      if (age < 18) {
        return { 
          ...state, 
          warning: 'Must be at least 18 yrs old!' }
      }
      return { 
        ...state, 
        year: action.payload, 
        warning: '' }
    default:
      throw new Error('Unknown action type')
  }
}