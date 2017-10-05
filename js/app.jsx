
import React from 'react';
import ReactDom from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import TopBar from './components/topBar.jsx'
import LeftSideBar from './components/leftSideBar.jsx'
import Comments from './components/comments.jsx'
import CommentsIcon from './components/commentsIcon.jsx'
import GalleryIcon from './components/galleryIcon.jsx'
import Gallery from './components/gallery.jsx'
import ConsoleIcon from './components/consoleIcon.jsx'
import Console from './components/console.jsx'
import MainLoader from './components/loader.jsx'
import GameIcon from "./components/gameIcon.jsx";
import Game from "./components/game.jsx";
import SkillsIcon from "./components/skillsIcon.jsx";
require('../scss/main.scss')

document.addEventListener('DOMContentLoaded',function () {

    class DesktopIcons extends React.Component{


        render(){
            return <div onDoubleClick={this.handleDoubleClick}
                       className="desktopIcons">
                {this.props.children}
            </div>
        }
    }

    class App extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                change: false,
            }
        }
        componentDidMount(){
            this.loaderMain = setTimeout(()=>{
                this.setState({
                    change: true,
                },clearTimeout(this.loaderMain))
            },6000)
        }

        render(){
            let abc;
            if(true) {
                abc = <div className="mainScreen">
                    <TopBar/>
                    <LeftSideBar/>
                    <DesktopIcons>
                        <CommentsIcon/>
                        <GalleryIcon/>
                        <GameIcon/>
                        <ConsoleIcon/>
                        <SkillsIcon/>
                    </DesktopIcons>
                    <Comments/>
                    <Console/>
                </div>

            }else {
                abc = <MainLoader/>
            }



            return  <div className="wrapper">
                {abc}
                    </div>
        }
    }

    ReactDom.render(

        <App/>,
        document.getElementById('app')


    )
});