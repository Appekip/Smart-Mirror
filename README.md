Web application for a Smart/Magic mirror

Application is supposed to run on a stationary Smart/Magic Mirror and displays current date, time and weather information in the desired language. 

The application uses an API from https://openweathermap.org/api 

To run this applictation you need to have your own API key from https://openweathermap.org/api

Setting up:

1. Create a file called ".env" in your root folder (Next to this ReadMe)

2. Now you need to input these variables into .env and use your own values for them

        REACT_APP_CITY_LOCATION=YourCity
        REACT_APP_LANG=DesiredLanguage
        REACT_APP_WEATHER_API_KEY=YourAPIKey

    For all the available languages and their country codes, visit: 
    https://openweathermap.org/api/one-call-3#multi

3. Install node.js https://nodejs.org/en/download

4. Run the following commands:

    npm i

    npm start

5. Application should start running on http://localhost:3000/

    If you are using VSCode you should also get a message like this in your terminal

    You can now view smartmirror in the browser     

        Local:            http://localhost:3000        
        On Your Network:  xxxxxxxxxxxxxxxxxxxxx

6. Now you can build it using the command
   
   npm run build

   Then copy the build folder into a server where you can host the application

   You can use this: https://github.com/Appekip/smartMirrorServer
