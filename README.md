# React WeatherApp

A weather App built with React, Redux (with thunk), styled-components and a bit of framer-motion

# Overview on frameworks used:

- For Styling I decided to stick to styled-components, since I feel it would give more creative freedom and flexibility for styling the app.
- For minimalistic animations I chose framer-motion for it's simplicity
- For state, I used Redux with thunk and also Redux Devtools for Chrome for easier debugging.
- For charts, chart.js was the best choice compared to writing custom canvas scripts.
- The webApp is fully responsive for smaller devices
- Live version is deployed to netlify @ https://react-weatherapp-davedarsa.netlify.app/

# Component Overview:

# Loading screen

The loading screen initiates a redux action to fetch the weather forecast for the next 5-6 days and also, to have the most accurate data for the current day, the action also fetches current day's current weather information. After the data is loaded, the weatherinfo screen is rendered.

# Weatherinfo

Since the received data contains 40 items, sometimes the sorted daily forecast can be for the next 5 days or 6 days.(min - 1 interval, max -8 intervals) So I implemented a helper that creates cards and adds it into the pages array. Max pageSize == 3.
There's always 2 pages, each containing a maximum of 3 cards and a minimum of 2 weather cards.
For example:
If the forecast is for the next 5 days, page 1 has 3 cards and page 2 has 2.
If the forecast is for the next 6 (incomplete for the first and last day), Page 1 has 3 cards, and Page 2 also has 3 cards.

**The background**

Since the redux store contains today's current weather as well, I thought it would be nice if the background was dynamic and matched current weather's condition (rain/clouds/sun/snow/mist - as documented in the Openweathermap API).

**Cards**

Each card displays calculated average temperature for the day, average humidity and the formatted date, as well as the earliest weather condition icon. But for the first card, since it's the current day's card, I added current weather and current weather icon as well, for more accuracy.

**Arrows**

The arrows change the current displayed cards array (page), to the following or previous page, and only rendering if there's either a page before, or after the current one.

**Temperature togglers**

The toggle buttons change the displayed temperature info from Fahrenheit to Celsius or vice versa. Also changes the data which is displayed in the barchart.

**Barchart**

As mentioned above, I used chart.js for rendering the barchart. It takes in the selected card's forecast and renders out the 3-hourly chart. Max bar number is 8, but depending on the API response and the time intervals for a selected day, the minimum number of bars can be 1, which is rendered respectively to it's time.
The barchart is fully responsive and shows temperature information on hover or on touch on mobile devices.

**Tests**

Wrote 2 test suites - one for UI details reducer and one for fetchAction (async). For pretend API I used Jest Fetch Mock.
For running tests, just running the Create-React-App default test script works.

```sh
npm test
```
