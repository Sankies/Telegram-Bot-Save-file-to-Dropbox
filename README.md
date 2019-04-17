# Summerintern2019_challenge_cuhk_developer_TSZHEI_TUNGLAM

Prototype description

This project provides a solution to automatically saving a massive number of photos from multiple Telegram user to a single lender account. It is useful for users who need to recieve massive number of image message in telegram and would like to autometically save them into Dropbox folder.

Developer:
CHOW TSZE HEI
HO TUNG LAM

Video demo: https://youtu.be/w0cT9EcwoDE

Components

Frontend:                     
React, Dropbox API                   

Backend:                
Flask in Python, Telegram API (Python), phpMyAdmin (MySQL server)

React is responsible for generating the UI components and authentication. Dropbox API is implemented for viewing, sorting and downloading images from the Cloud.

Flask is the library we used to input and output authentication data, as well as the process of automatic download with Telegram. phpMyAdmin serves as the authentication data storage and the Telegram API retrieves data from the Telegram and store them into Dropbox.
Telegram has an open source API called telepot module on python. By using the module, we implemented a telegram chatbot to detect user message and save the data into the Cloud.

Procedure

1. Run the React components to generate a page in http://localhost:3000

Command: (CodeForAsia/mylogin) >npm start

After typing the command, React will automatically start a new tap in your browser and direct it to localhost:3000 after a few seconds.

2. Run the mysqlloginreg.py script to enable the database

Command: (CodeForAsia/mylogin) >python mysqlloginreg.py

After running the script, you can either create an account or login an account with the tap in the top-left hand corner.
You can check your registered account information in the phpMyAdmin table
An Alternative solution for direct access to the main page without login is to press the testing button under the Welcome page. (For testing use)

3. Run the bot.py script to enable Telegram bot

Command: (CodeForAsia/mylogin/Telegram)>python bot.py

By running the bot script, a telegram chatbot (https://t.me/TeleAutoSave_bot) is ready to receive any receipts with the hashtag “#purchase”.
Once chatbot detects the incoming image with the hashtag, it will download the image to a local folder and rename it in the format of “BorrowerID_date-time_purchase.jpg”.
Finally, the script will upload the image from local folder to our Dropbox account automatically and save in the filename as same as the local file.

4. View the Dropbox content and download them to local storage

After logging in, there is a button direct you to open the Dropbox API where you can view all the selected extension files (default JPG) and download them at once. In this version, the download function has been blocked due to some limitations.

Limitation

1. Download files with the browser

In procedure 4, we implemented a download function with the Dropbox API. We captured the list of URL of the images the user wants to download. However, due to nowadays browser CORS security policy. In this case, we need to modify the HTML response header to achieve the download.

2. Over-reliance on Dropbox API - lack of flexibility

As in limited time, we choose to use the Dropbox chooser API to link to Dropbox and serve the function such as filtering and searching. 


Future Direction

We can build a web server on AWS EC2 and push our localhost to the server. If we implement on a server, we can try to develop our own gallery for displaying all the receipts, instead of using Dropbox API. The gallery loads the images collected from telegram chatbot, which stored in the local folder of the servers. Displaying filename, checkbox of selection of each image. We can then implement a download button to download the selected image. After that, the search function can be developed to check whether the string input matches the filename stored in the image folder. The above design will be more complete and more flexible for the further development.
