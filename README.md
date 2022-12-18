# Notion Editor Clone Challenge Solution

This is a clone of Notion editor. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Setup](#setup)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Type a header when the user starts with commands "/1" to "/6"
- See a pop up appears when user types anything that starts with commands "/1" to "/6"
- Update the UI without the text commands "/1" to "/6"
- Update the text in accordance to the user input of "/{header tag}"
- See nothing on the UI when they press enter without any inputs or just "/1" to "/6" commands

### Screenshot

![Mobile](/src/components/images/Notion-Editor-Clone-mobile-1.png)
![Mobile](/src/components/images/Notion-Editor-Clone-mobile-2.png)

![Desktop](/src/components/images/Notion-Editor-Clone-desktop-1.png)
![Desktop](/src/components/images/Notion-Editor-Clone-desktop-2.png)

### Links

- Solution URL: [Github](https://github.com/Haywayaheadshot/h-j-project)
- Live Site URL: [Live Demo](https://cute-figolla-4abcee.netlify.app/)
- Demo URL : [Demo]()

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- React
- Redux
- Javascript
- Github
- Vscode

### What I learned

To finish projects before deadline. I also learned how handle distractions so it does not affect productivity. This is because this project time frame was 48hours.

```js
const proudOfThisFunc = () => {
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
          tagName: action.tagName,
        },
      ];
}
```

>### Setup

- Clone this [repository](https://github.com/Haywayaheadshot/h-j-project.git) to your desired folder.
- Access `cd h-j-project`
- npm install
- npm start

## Author

- Github - [Abubakar Ummar](https://github.com/Haywayaheadshot)
- Linkedin - [Abubakar Ummar](https://www.linkedin.com/in/abubakar-ummar/)
- Twitter - [@haywayalive](https://twitter.com/haywayalive)

## Acknowledgments

- Thanks to Microverse for knowledge impacted.
- Thanks to [Flaticons](https://www.flaticon.com/) for the icons used.
