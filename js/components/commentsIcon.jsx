import React from 'react'



export default class CommentsIcon extends React.Component{
    handleClick = (e) => {

        document.querySelector(".commentsIcon").style.border = "1px solid gray";
        document.querySelector(".commentsIcon").style.borderRadius = "5px";


    }
    handleUp = (e) => {
        document.querySelector(".commentsIcon").style.border = "none";
    }
    handleDoubleClick = (e) =>{

        document.querySelector('.comments').style.display = "block"



    }

    render(){
        return <div onDoubleClick={this.handleDoubleClick}
                    onMouseDown={this.handleClick}
                    onMouseUp={this.handleUp} className="icon commentsIcon">
                    <div className="icon">
                        <img src="../../assets/commentsIcon.png" alt=""/>
                    </div>
                    <div className="title">
                        Comments.log
                    </div>
                </div>
    }
}