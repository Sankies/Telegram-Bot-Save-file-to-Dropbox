import time
import datetime
import telepot
from telepot.loop import MessageLoop
from threading import Thread
import sys
import dropbox

from dropbox.files import WriteMode
from dropbox.exceptions import ApiError, AuthError

# Access token
TOKEN = 'zYZbkZGiSeAAAAAAAAAAFO6U1w2qUzeOIsVGq9e-ZWRIM9F9pexDcXuiVbZuySW8'

# To Local folder: LOCALFILE = '<Path to the file to be uploaded>'
# To dropbox : BACKUPPATH = '/<desitination filename>' # Keep the forward slash before destination filename


# Uploads contents of LOCALFILE to Dropbox
def backup(LOCALFILE, BACKUPPATH):
    with open(LOCALFILE, 'rb') as f:
        # We use WriteMode=overwrite to make sure that the settings in the file
        # are changed on upload
        print("Uploading " + LOCALFILE + " to Dropbox as " + BACKUPPATH + "...")
        try:
            dbx.files_upload(f.read(), BACKUPPATH, mode=WriteMode('overwrite'))
        except ApiError as err:
            # This checks for the specific error where a user doesn't have enough Dropbox space quota to upload this file
            if (err.error.is_path() and
                    err.error.get_path().error.is_insufficient_space()):
                sys.exit("ERROR: Cannot back up; insufficient space.")
            elif err.user_message_text:
                print(err.user_message_text)
                sys.exit()
            else:
                print(err)
                sys.exit()

def handle(msg):
    """
    A function that will be invoked when a message is
    recevied by the bot
    """
    content_type, chat_type, chat_id = telepot.glance(msg)

    #check if there are caption with the image
    if 'caption' in msg:

        #check whether the image with hashtag "#puchase"
        if content_type == 'photo' and msg['caption'] == '#purchase':
            #rename the file
            borrowerid = msg['from']['first_name'] + msg['from']['last_name']
            date = str(datetime.datetime.now().date())
            time = str(datetime.datetime.now().time())
            parsed_filename = borrowerid + '_' + date + '-' + time + '_purchase.jpg'
            parsed_filename = parsed_filename.replace(":","_")

            #download to local folder
            bot.download_file(msg['photo'][-1]['file_id'], 'D:/CodeForAsia/mylogin/Telegram/Receipt/' + parsed_filename)
            reply = "Well received with thanks!"
            bot.sendMessage(chat_id, reply)
            LOCALFILE = 'D:/CodeForAsia/mylogin/Telegram/Receipt/' + parsed_filename
            BACKUPPATH = '/' + parsed_filename

            #backup function: upload the image to dropbox
            backup(LOCALFILE, BACKUPPATH)
        else:
            print("no hashtag #purchase is found")

if __name__ == "__main__":

    # Provide your bot's token
    bot = telepot.Bot("660744809:AAFeO8tkZrybdgdbuFD0Y4MfTjqqdjEJwuI")
    # Create an instance of a Dropbox class, which can make requests to the API.
    print("Creating a Dropbox object...")
    dbx = dropbox.Dropbox(TOKEN)
    threads=[]
    MessageLoop(bot, handle).run_as_thread()
    for t in threads:
        t.join()

    while True:
        time.sleep(10)
