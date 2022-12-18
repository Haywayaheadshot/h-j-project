const ADD_BLOG = 'h-j-project/src/redux/books/addBlog';
const REMOVE_BLOG = 'h-j-project/src/redux/books/removeBlog';

const defaultState = [];

// Add and remove blog actions
export const addBlog = (payload) => (
  {
    type: ADD_BLOG,
    id: payload.id,
    text: payload.text,
    tagName: payload.tagName,
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
      // Write condition to check if received blog starts with /1 - /6
      // and change tag respectively
      if (action.text.startsWith('/')) {
        const startText = action.text.slice(0, 2);
        const headerTags = {
          '/1': 'h1',
          '/2': 'h2',
          '/3': 'h3',
          '/4': 'h4',
          '/5': 'h5',
          '/6': 'h6',
        };
        return [
          ...state,
          {
            id: action.id,
            // Check if user starts with values not in headerTags
            text: headerTags[startText] ? action.text.slice(2) : action.text,
            tagName: headerTags[startText] ? headerTags[startText] : 'p',
          },
        ];
      }
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          tagName: 'p',
        },
      ];

    case REMOVE_BLOG:
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
}
