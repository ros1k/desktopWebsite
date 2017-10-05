import React from 'react'



export default class ConsoleIcon extends React.Component{
    handleClick = (e) => {
        document.querySelector(".consoleIcon").style.border = "1px solid gray";
        document.querySelector(".consoleIcon").style.borderRadius = "5px";
    }
    handleUp = (e) => {
        document.querySelector(".consoleIcon").style.border = "none";
    }
    handleDoubleClick = (e) =>{

        document.querySelector('.console').style.display = "block"



    }

    render(){
        return <div onDoubleClick={this.handleDoubleClick}
                    onMouseDown={this.handleClick}
                    onMouseUp={this.handleUp}
                    className="icon consoleIcon">
            <div className="icon">
                <img src="../../assets/consoleIcon.png" alt="" data-info="console"/>
            </div>
            <div className="title" data-info="console">
                Console.sh
            </div>
        </div>
    }
}