import React from 'react'
require('../audiovisualisierung');
require('../bufferloader');
require('../id3-minimized');
class MusicContent extends React.Component{
    render(){
        return  <div className="musicContent">
                    <input type="file" id="input" onChange={handleFiles(this.files)}/>
                    <span id="loading"></span>
                    <div id="song_info_wrapper">
                        <div id="artist">Artist</div>
                        <div id="title">Titel</div>
                        <div id="album">Album</div>
                    </div>
                    <canvas id="freq" style={{width: "1024px", height: "525px"}}></canvas>
                </div>
    }
}
class TitleBar extends React.Component{
    render(){
        return <div className="titleBar">
            <img src="" alt=""/>
            <span>Music Player</span>
                </div>
    }
}
export default class MusicBox extends React.Component{
    render(){
        return  <div className="musicBox">
                    <TitleBar/>
                    <MusicContent/>
                </div>
    }

}