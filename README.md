# Smallcase-search-frontend

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## Description
Create an input text box with search functionality on key press.<br>
Show the list of search results in a paginated view with 5 results per page<br>
Add a load more button to allow users to load the next set of results (the
next page).<br>
The search should happen automatically as the user types<br>
Should be able to handle the following extra use cases :
- The search results are coming from an api, the api can have some
latency, so we should optimize the number of api calls that we send, for
example:
- We might want to cache the results on the FE for a particular
query for some time, so that we don’t make an api call for the
same query
- We might want to only start making the call after the user has at
least typed in 3 characters
- We may want to wait for some time after the user finishes typing,
so that we do not send the api calls for intermediate states
- What happens if an api call for a previous query takes more time
than the current query, how would the UI handle that ? For
example, the user types in abc, the query goes to the api,
meanwhile the user types in abcde, this query goes to the api as
well, what happens if the response for ‘abcde’ returns before
‘abc’? The UI should not be in an inconsistent state.
- The look and feel should be derived in accordance with the smallcase.com
website.<br>
## Tech stack
- React
- Create react app
- Allowed to use a css library for look and feel
- Axios if you want to use an actual search results api Or You can create
a fake api using setTimeout within the codebase
## Evaluation Criteria and submissions
● Functionality completion - Completed all functionality with proper optimization. <br>
● Polished look and feel - The look is derived from the look of the beautifully looking smallcase website. <br>
● Responsiveness - The website is responsive for all mobile laptop and tablet sizes.
● Component patterns - Proper react patterns are use 
● CSS usage
### ● Bonus points for:
○ Typescript - Yes <br>
○ Tests - Learnt react testing library and cypress, had moderate success.<br>
○ Accessibility - The website uses proper alt information for images, uses aria tags and HTML tags to separate content.<br>
○ Css animations / transitions - The website features beautiful and minimal style animations.<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

[contributors-shield]: https://img.shields.io/github/contributors/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[contributors-url]: https://github.com/shashtag/smallcase-search-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[forks-url]: https://github.com/shashtag/smallcase-search-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[stars-url]: https://github.com/shashtag/smallcase-search-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[issues-url]: https://github.com/shashtag/smallcase-search-frontend/issues
[license-shield]: https://img.shields.io/github/license/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[license-url]: https://github.com/shashtag/smallcase-search-frontend/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shashtag
[product-screenshot]: images/dogo.jpeg
[version-satisfaction]: images/version.png
[version-update]: images/update.png
[loading]: images/loading.png
[error1]: images/error1.png
[error2]: images/error2.png
[error3]: images/error3.png
[error4]: images/error4.png