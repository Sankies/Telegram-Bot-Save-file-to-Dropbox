import React, { Component } from 'react'
import DropboxList from './DropboxList';
import ImageList from './ImageList'

/*Back door for testing input user after login
  Usually user will not enter this page */
class Gallery extends Component {
  /*Hard Coded appKey for Dropbox API*/
  state ={appKey: 'vgigjj7ip52q8zr',
          images: []
          }

  callBackImageList = async (imageList) => {
     this.setState({images: imageList});
     console.log('this is callback fun ImageList!!!')
     console.log(this.state.images)
     this.forceUpdate()
 }


  render() {
    return (
      <div>
        <h1 className="text-center">
          Gallery
        </h1>
        <div>
          <DropboxList appKey={this.state.appKey} callBackImageList={this.callBackImageList}/>
          <ImageList images={this.state.images} />

        </div>
      </div>
    )
  }

}

export default Gallery
