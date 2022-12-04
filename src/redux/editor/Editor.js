const ADD_BLOG = 'book-keeper/src/redux/books/addBlog';
const REMOVE_BLOG = 'book-keeper/src/redux/books/removeBlog';

const defaultState = [];

// Add and remove blog actions
export const addBlog = (payload) => (
  {
    type: ADD_BLOG,
    id: payload.id,
    text: payload.text,
  }
);

export const removeBlog = (payload) => (
  {
    type: REMOVE_BLOG,
    id: payload.id,
  }
);

// Create reducer for blog
export default function blogsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BLOG:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case REMOVE_BLOG:
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
}
