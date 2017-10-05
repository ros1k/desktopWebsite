import React from 'react'



export default class GalleryIcon extends React.Component{
    handleClick = () =>{

    }
    render(){
        return <div onDoubleClick={this.handleClick} className="icon galleryIcon">
            <div className="icon">
                <img src="../../assets/galleryIcon.png" alt=""/>
            </div>
            <div className="title">
                Gallery.img
            </div>
        </div>
    }
}