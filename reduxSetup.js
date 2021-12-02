const INITIAL_STATE = {
    img: 'ヘ(^ ^ヘ)'
};

  
const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HAPPY':
      return { ...state, img: action.payload  }
    case 'SAD':
      return { ...state, img: action.payload  }
    case 'ANGRY':
      return { ...state, img: action.payload }
    case 'CONFUSED':
      return { ...state, img: action.payload }
    default:
      return state
  }
}


