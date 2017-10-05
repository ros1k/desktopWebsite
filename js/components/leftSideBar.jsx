import React from 'react'


class Html extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: this.props.mouseX,
            mouseY: this.props.mouseY,
        }

    }

    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".html div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = this.state.mouseY + 15 + "px";
        hint.style.left = 15 + this.state.mouseX + "px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".html div")
        hint.style.position = "absolute";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return   <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="html">
                    <img src="../../assets/html5.png" alt=""/>
                    <div>
                        Html5
                    </div>
                 </div>
    }
}
class Css extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".css div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".css div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="css">
            <img src="../../assets/css3.png" alt=""/>
            <div>
                Css
            </div>
        </div>
    }
}
class Javascript extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".javascript div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate, false);
        let hint = document.querySelector(".javascript div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return  <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="javascript">
                    <img src="../../assets/js2.png" alt=""/>
                    <div>
                        Javascript,
                        Es6
                    </div>
                </div>
    }
}
class Sass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".sass div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".sass div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="sass">
            <img src="../../assets/sass.png" alt=""/>
            <div>
                Sass
            </div>
        </div>
    }
}
class Rwd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".rwd div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".rwd div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="rwd">
            <img src="../../assets/rwd2.png" alt=""/>
            <div>
                Responsive web design
            </div>
        </div>
    }
}
class Jquery extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }

    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }

    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".jquery div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".jquery div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return  <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="jquery">
            <img src="../../assets/jquery.png" alt=""/>
            <div>
                Jquery,
                Ajax
            </div>
        </div>
    }
}
class Reactbadge extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".react div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".react div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft} className="react">
            <img src="../../assets/if_React.js_logo_1174949.png" alt=""/>
            <div>
                React
            </div>
        </div>
    }
}
class Git extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }
    handleEnter= (event) => {
        document.addEventListener('mousemove', this.onMouseUpdate);
        let hint = document.querySelector(".git div")
        hint.classList.add("hide");
        hint.style.position = "fixed";
        hint.style.top = 15 +this.state.mouseY+ "px";
        hint.style.left = 15 + this.state.mouseX +"px";
    }
    handleLeft = (event) => {
        let hint = document.querySelector(".git div")
        hint.style.position = "fixed";
        hint.classList.remove("hide");
        this.setState({
            mouseX: null,
            mouseY: null,
        })
    }
    render(){
        return <div onMouseMove={this.handleEnter} onMouseLeave={this.handleLeft}  className="git">
            <img src="../../assets/git.png" alt=""/>
            <div>
               Git
            </div>
        </div>
    }
}
export default class LeftSideBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mouseX: 0,
            mouseY: 0,
        }

    }
    onMouseUpdate = (e)=> {
        let x = e.pageX;
        let y = e.pageY;
        this.setState({
            mouseX: x,
            mouseY: y,
        })
    }

    showbar = (e) =>{
        document.querySelector(".leftSideBar").classList.add("showleftbar")
        document.querySelector(".leftSideBar .arrowShowUp").classList.add("hideArrow")
    }
    hidebar = (e) =>{
        if(document.querySelector(".leftSideBar").classList.contains("showleftbar")) {
                document.querySelector(".leftSideBar").classList.remove("showleftbar")
                document.querySelector(".leftSideBar .arrowShowUp").classList.remove("hideArrow")

        }else{

        }

    }
    render(){
        document.addEventListener('mousemove', this.onMouseUpdate, false);
        return  <div onMouseEnter={this.showbar} onMouseLeave={this.hidebar} className="leftSideBar">
                    <Html mouseX={this.state.mouseX} mouseY={this.state.mouseY}/>
                    <Css/>
                    <Javascript/>
                    <Sass/>
                    <Rwd/>
                    <Jquery/>
                    <Reactbadge/>
                    <Git/>
                    <img className="arrowShowUp" src="../../assets/if_nav-arrow-left_383101.png" alt=""/>
                </div>
    }
}