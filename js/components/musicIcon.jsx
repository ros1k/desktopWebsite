import React from 'react'


export default class MusicExe extends React.Component{
    render(){
        return <div onClick={this.handleClick} className="musicExe">
                    <img src="../../assets/if_apple-music-2_2301791.png" alt="" width="64px" height="64px"/>
                    <h3>Music Player</h3>
                </div>
    }
}