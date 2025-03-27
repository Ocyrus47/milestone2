# 📋 **Testing Documentation**

# Contents


## Testing

This app code was validate by using W3C CSS Validation Service, W3C Markup Validation Service and lighthouse. 

Testing was conducted throughout the entire project development phase. Google Developer Tools and [JSHint](https://jshint.com/) were utilized to identify errors and troubleshoot any issues that arose during development.

Automated testing helps catch problems quickly and saves time by letting the computer do repetitive tasks instead of the developer. 


### Code Validation

#### HTML Validation

[W3C Markup Valication Service](https://validator.w3.org/ 'link to Markup validator')
![Index](./assets/testing/html-test.jpg)

#### CSS Validation

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ 'link to CSS validator')
![style](./assets/testing/css-test.jpg)

### Lighthouse testing

Lighthouse test for desktop
![style](./assets/testing/lighthouse-test-desktop.jpg)

Lighthouse test for mobile
![style](./assets/testing/lighthouse-test-mobile.jpg)

### Accessibility testing

Accessibility testing for Desktop
![style](./assets/testing/accessibility-20test-desktop.jpg)

Accessibility testing for mobile
![style](./assets/testing/accessibility-20test-mobile.jpg)


### Test carried out for Best Practice and SEO 

Best Practice and SEO testing for Desktop
![style](./assets/testing/best-practice-seo-test-desktop.jpg)

Best Practice and SEO testing for Mobile
![style](./assets/testing/best-practice-seo-test-mobile.jpg)


### Testing User stories

1. I want the app to be simple to navigate and use.
    * The app consists of one page with everything it provides.
    * The app has a simple structure, making it easy to navigate.
    * The app contains only necessary content.
    * The structure remains the same on all device sizes.
    * The app follows good accessibility principles.

2. I want the app to be accessible on multiple platforms (such as web, mobile, and tablets), so that users can play it on their preferred devices.
    * The app has been designed with a mobile first approach.
    * The app is responsive on all device sizes.

3. I want the app to have a visually appealing interface with good design principles, so that it attracts and engages users from the moment they visit.
    * The app follows a consistent design.
    * The colours used are in good contrast and follow the theme of the app.
    * The interface is simple yet pleasing, keeping the user engaged.

4. I want the app to show the user a manual to assist the user with their recipe search.
    * The app follows a consistent design. 
    * The colours are used in good contrast and follows the theme of the app.
    * The direction for search option is clearly visible to the user.

5. I want the app to have to ability to prompt the user if their input in invalid or NULL. 
    * The app will prompt alert message notifying the user of invalid input.
    * The message in background will change to ask the use to input correct recipe.

6. I want the app to produce the search results in a grid view of all the recipies when the search button is triggered with the correct search input. 
    * The app will show a responsive grid of recipes.
    * The app will transition the selected recipe to ease-in-out to upon mouse over. 
    * The mouse pointer will apply to create a more easire UI for the user. 

7. I want the app to pop out recipe details page when the user clicks the view recipe button in the grid view.
    * The app will show the recipe details contents in a pop up page.
    * The app follows a consistent design. 
    * The colours are used in good contrast and follows the theme of the app.

8. I want the app to close the pop out recipe details page when close button is clicked. 
    * The close button will highlight to change change color when cursor over. 
    * The pop up page is closed when the close button is clicked. 

### Functionality testing

#### App page load

| Action                        | Expected Result    | Pass/Fail|
| ----------------------------- |--------------------|----------|
| Site URL entered into browser | Site loads         | Pass     |


#### Responsiveness

| Action                        | Expected Result    | Pass/Fail|
| ----------------------------- |--------------------|----------|
| Test on mobile device         | Responsive         | Pass     |
| Test on tablet device         | Responsive         | Pass     |
| Test on laptop device         | Responsive         | Pass     |
| Test on desktop               | Responsive         | Pass     |


#### Search for recipe

| Action                        | Expected Result                       | Criteria met Y/N|
| ----------------------------- |---------------------------------------|-----------------|
| Invalid Input                 | Alert pop up / Message changed in app | Y               |
| Valid Input                   | Menu grid view shown                  | Y               |
| Null Input                    | Alert pop up / Message changed in app | Y               |


#### Hover orver and mouse point on menu grid for valid search

| Mouse over effect on grid menu                                                             | Criteria met Y/N | 
| -------------------------------------------------------------------------------------------|------------------|
| Menu grid transition to ease - in  out                                                     |         Y        |


#### Menu details pop page on view recipe button click

| View recipe putton clicked                                                                 | Criteria met Y/N | 
| -------------------------------------------------------------------------------------------|------------------|
| Pop up page with recipe details opens                                                      |         Y        |


#### Close menu details pop up page on close button click

| Close button clicked in pop up recipe details page                                         | Criteria met Y/N | 
| -------------------------------------------------------------------------------------------|------------------|
| Pop up page with recipe details closes                                                     |         Y        |


#### Click app logo to reset the search 

| Click app logo                                                                             | Criteria met Y/N | 
| -------------------------------------------------------------------------------------------|------------------|
| Reset the search criteria                                                                  |         Y        |