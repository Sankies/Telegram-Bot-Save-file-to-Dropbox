import React from 'react'

/*Back door for testing input user after login
  Usually user will not enter this page */

const ImageList =(props) =>{
    const imagesList = props.images.map((image)=>{
      return <img src= {image.link} />
    });
    console.log ('ImageList')
    console.log (imagesList)
    return (
      <div>
        <img src= {'https://www.dropbox.com/s/8m655xq7viqwh5p/11073530_813874512031345_719332186_n.jpg?dl=0'} />
      </div>
    );
};

export default ImageList;
