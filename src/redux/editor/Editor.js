const ADD_BLOG = 'book-keeper/src/redux/books/addBlog';
const REMOVE_BLOG = 'book-keeper/src/redux/books/removeBlog';

export const addBlog = () => (
  {
    type: ADD_BLOG,
    payload: test,
  }
);

export const removeBlog = () => (
  {
    type: REMOVE_BLOG,
    payload: test,
  }
);

export default function blogsReducer(state = [], action) {
  switch (action.type) {
    case ADD_BLOG:
      return [
        ...state,
        {
          payload: action.payload,
        },
      ];
    case REMOVE_BLOG:
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
}