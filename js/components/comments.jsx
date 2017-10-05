import React from 'react';
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAziMsCdu7CPFrLtlN78ksfj32HkjaLL4Y",
    authDomain: "robotproject-c5401.firebaseapp.com",
    databaseURL: "https://robotproject-c5401.firebaseio.com",
    projectId: "robotproject-c5401",
    storageBucket: "robotproject-c5401.appspot.com",
    messagingSenderId: "47973416891"
};

let fb = firebase.initializeApp(config);
class TitleBar extends React.Component{


    handleClick = () =>{
        document.querySelector(".comments").style.display = "none"
    }

    render(){
        return  <div className="titleBar">
                    <div>
                        <img onClick={this.handleClick} src="../../assets/close.png" alt=""/>
                    </div>
                    <div>Comments</div>
                </div>
    }
}
class AddComment extends React.Component{
    constructor(props){
        super(props)
    }
    handleSend = (event) =>{
        let name = document.getElementById("commentName").value;
        let comment = document.getElementById("comment").value;

        let set = {
            comment: comment,
            name: name
        }
        fb.database().ref("comments").push(set);


        document.getElementById("commentName").value = "";
        document.getElementById("comment").value = "";


    }
    render(){
        return <div className="addComment">
            <label htmlFor="commentName">Name: </label>
            <input type="text" id="commentName"/>
            <br/>
            <label htmlFor="comment">Comment: </label>
            <textarea id="comment"/>
            <button id="sendComment" onClick={this.handleSend} >Send</button>
        </div>
    }
}
class CommentsArea extends React.Component{


    render(){
        let lista = this.props.comments.map((elem,index )=>{
            return <li key={index}>{elem.name}: {elem.comment}</li>
        })
        return <div className="commentsArea">
                    <ul className="commentsList">
                        {lista}
                    </ul>
                </div>
    }
}

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            comments: [],
        }
        
    }
    componentDidMount(){
        fb.database().ref("/comments").on("value", snap => {
            let data = snap.val();
            let newState = [];
            for (let item in data) {
                newState.push({
                    comment: data[item].comment,
                    name: data[item].name

                });
            }
            this.setState({
                comments: newState,
            })
        })

    }
  
    render(){
        return  <div className="comments">
                    <TitleBar/>
                    <AddComment {... this.state}/>
                        <div className="label"></div>
                    <CommentsArea {... this.state}/>
        </div>
    }
}
export default Comments;