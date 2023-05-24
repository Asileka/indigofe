# Tech test submission by Ekaterina Mulyukova

Thank you for viewing my tech test submission. You'll find separate folder for the back end and the front end named accordingly.
I've opted to make back end using Express and created a single api endpoint that accepts shipping data from the FE and returns the correct corresponding data which includes the cost information. Since the assignment included a csv file with the data, I have decided not to recreate it in sql but to use a package called 'csvtojson' which parsed the information to json object, allowing me to incorporate it in my code.
It's worth mentioning, that I have made slight changes to the data itself: for the weigh values not to overlap, I have reduced every value in the 'Max Shipment Weight (KG)' column by 0.01.
To test the api I have used Insomnia and been sending POST requests to my api with the following example JSON:
{
"shipWeight": "1100",
"shipType": "Standard UK&I",
"shipSendAddrs": "BL6A76",
"shipRecieveAddrs": "M73RT",
"shipDate": "26/04/2024"
}
For your convenience I have hosted the api on Render, you could try sending a post request to:
https://indigoapi.onrender.com/api/shipmentinfo

For the Front End I'm using Expo as it allows me to quickly deploy and test the app on my phone. In this particular project I've decided to try out building it with Expo Router: similarly to Next.js "every file in the app directory automatically becomes a route in your mobile navigation".
To send user input data to my Back End, I've been using Axios as it simplifies the process and shortens the code.

## 🚀 How to use

No need to worry about deploying the Back End locally as it's already hosted. However, if you did want to try sending POST requests locally, please cd into indigobackend folder and run two commands in your terminal:
npm install
node indigo.js

To preview the mobile app you'll need to install Expo locally on your computer and Expo Go on your phone.
Please follow the official installation guidelines:
https://docs.expo.dev/get-started/installation/
https://docs.expo.dev/get-started/expo-go/
Then cd into indigofe folder and run the following commands:
npm install
npx expo start
Then follow the instructions in your terminal. You should be able to see a QR code that you can scan with Expo Go. If that doesn't work, try this command instead:
npx expo start --tunnel

## 📝 I would improve the following

If I've had a bit more time to work on the project, there are two main keypoints I would work on. First I would add extra calculations capability to my api so it's able to calculate the correct discounted shipping price based on the sender's and recipient's postcode. Second, I would like to spend about 2 hours working just on the look of the app and getting it as close to the Figma prototype.
