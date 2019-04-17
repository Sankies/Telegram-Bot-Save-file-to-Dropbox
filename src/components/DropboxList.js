import React, { Component } from 'react'
import DropboxChooser from 'react-dropbox-chooser'
import ImageDownloader from 'image-downloader'


class DropboxList extends Component {
  /*Hard Coded appKey for Dropbox API*/
  state ={appKey: 'vgigjj7ip52q8zr'}

  /* Trigger the download event after choosing photo from Dropbox
     Currently blocked by the browser because of the Access Control Allow */
  onSuccess(files){
     console.log(files)
        /*
        const download = require('image-downloader')
        download.image(options)
          .then(({ filename, image }) => {
            console.log('File saved to', filename)
          })
          .catch((err) => {
            console.error(err)
          })
          */
      this.props.callBackImageList(files)
  }

  /* Dropbox API. Fixed extensions with .jpg */
  render() {
    return (
        <DropboxChooser
          appKey='vgigjj7ip52q8zr'
          success={files => this.onSuccess(files)}
          multiselect={true}
          extensions={['.jpg']} >
          <div className="dropbox-button, btn btn-lg btn-primary btn-block">Click me to view your Dropbox</div>
          <div>
            <img src= {'https://www.dropbox.com/s/8m655xq7viqwh5p/11073530_813874512031345_719332186_n.jpg?dl=0'} />
          </div>
        </DropboxChooser>

    );
  }
}

export default DropboxList;
