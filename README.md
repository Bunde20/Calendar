# Work Day Schedule

## Client Needs
- As a full time employee, the client would like to have a calendar to schedule work day events in order to stay organized and manage time effectively.
  
## Acceptance Criteria
- When the daily calendar is opened the current date should be displayed at the top of the page.
    - This was done by using a web API provided by day.js to display the current day of the week at the top of the screen along with the month and date for the client to view.
- The work day hours that should be displayed are 9am - 5pm.
    - Using bootstrap styling and containers in the HTML, the screen displays every hour between 9am and 5pm for the client to schedule anything that needs to be done.
- In the work day hours, the time blocks should be styled in different colors in order to clarify past, present, and future hours of the day.
    - This was achieved by creating a Javascript function that displays the current hour text area as red, the past hours are grey, and the future as green to differentiate between them.
- Each hour should contain the ability to enter text to help with scheduling.
    - When the user clicks on the area next to the displayed hour on the left, they will be able to enter in text of their choosing.
- After the user has entered the text they would like to save, the information should be stored in local storage and remain there even after refreshing the page.
    - When the user clicks on the save icon displayed on the right the information that they have entered will remain in the text box and local storage for them to reference back to even after refreshing the broswer. This will also display a message that allows the user to see confirmation that their information has been saved.

## Usage
![05-third-party-apis-homework-demo](https://github.com/Bunde20/Calendar/assets/135177057/61e37fb5-eb69-4423-8309-0b26c00dcb08)

## Credits
The starter code was provided by Xandromus: https://github.com/coding-boot-camp/crispy-octo-meme

## Deployed Application Link
Here is a link to the deployed application: https://bunde20.github.io/Calendar/
