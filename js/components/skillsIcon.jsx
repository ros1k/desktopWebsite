import React from 'react'



export default class SkillsIcon extends React.Component{
    handleClick = (e) => {
        document.querySelector(".skillsIcon").style.border = "1px solid gray";
        document.querySelector(".skillsIcon").style.borderRadius = "5px";
    }
    handleUp = (e) => {
        document.querySelector(".skillsIcon").style.border = "none";
    }
    handleDoubleClick = (e) =>{
        document.querySelector('.leftSideBar').classList.add("showleftbar");
        document.querySelector(".leftSideBar .arrowShowUp").style.left = "-200px";
        let abc = setTimeout(function () {
            document.querySelector('.leftSideBar').classList.remove("showleftbar");
            document.querySelector(".leftSideBar .arrowShowUp").style.left = "-55px";
        },10000);
        abc;

    }
    render(){
        return <div onMouseDown={this.handleClick}
                    onMouseUp={this.handleUp}
                    onDoubleClick={this.handleDoubleClick}
                    className="icon skillsIcon">
            <div className="icon">
                <img src="../../assets/skillsIcon.png" alt=""/>
            </div>
            <div className="title">
                Skills.ini
            </div>
        </div>
    }
}