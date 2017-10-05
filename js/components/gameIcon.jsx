import React from 'react'



export default class GameIcon extends React.Component{
    handleClick = (e) => {

        document.querySelector(".gameIcon").style.border = "1px solid gray";
        document.querySelector(".gameIcon").style.borderRadius = "5px";


    }
    handleUp = (e) => {
        document.querySelector(".gameIcon").style.border = "none";
    }
    handleDoubleClick = (e) =>{

        document.querySelector('.game').style.display = "block"



    }

    render(){
        return <div onDoubleClick={this.handleDoubleClick}
                         onMouseDown={this.handleClick}
                         onMouseUp={this.handleUp} className="icon gameIcon">
            <div className="icon">
                <img src="../../assets/gameIcon.png" alt=""/>
            </div>
            <div className="title">
                Game.exe
            </div>
        </div>
    }
}