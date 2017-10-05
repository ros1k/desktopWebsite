import React from 'react';
import moment from 'moment'
import 'moment/locale/pl'
import fetchJsonp from 'fetch-jsonp'
const url = "https://www.cleverbot.com/getreply";
const key = "CC440_tf9MgrXvHKVdGGIYlFBBQ";




class TitleBar extends React.Component{
    handleClick = () =>{
        document.querySelector(".console").style.display = "none"
    }

    render(){
        return  <div className="titleBar">
            <div>
                <img onClick={this.handleClick} src="../../assets/close.png" alt=""/>
            </div>
            <div>Console</div>
        </div>
    }
}
class ConsoleArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            answer: [],
            show: false,
        }
    }

    componentDidMount() {
        this.logTimeout = setTimeout(() => {
            let text = "Hello my friends welcome on my project site. My name is Damian and i just finished " +
                "front-end developer bootcamp at CodersLab i really enjoy my time here and looking forward  " +
                "to work as a web developer and develop new skills to keep getting better and better. " +
                "Explore my working Desktop and if you got any hints for me you are welcome to leave a comment or ask me here";
            let counter = 0;
            let tt = "";
            this.textinterval = setInterval(() => {
                tt += text[counter];
                this.setState({
                    text: this.state.text + text[counter],
                })
                counter++;

                if (counter === text.length) {
                    clearInterval(this.textinterval)

                }
            }, 50)
        }, 3000)
    }
    render() {
        return <div className="renderArea">
            <div className="first">
                <span className="admin">{moment().format('LT')} root :</span><span>{this.state.text}</span>
            </div>
        </div>

    }
}
class InputArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: "",
            question: "",
            answer: [],
            
        }
    }
    handleChange = (e) =>{
        this.setState({
            question: e.target.value,
        })

    }
    handleEnter(event) {

            if(event.charCode === 13){
                let temp = this.state.answer.slice();
                let input = document.getElementById("consoleInput");
                fetchJsonp(url+"?input="+input.value+"&key="+key+"&callback=ProcessReplay")
                      .then(data => data.json())
                      .then(data => {
                          temp.push(input.value);
                          input.value = "";
                          let ans = data.clever_output;

                          temp.push(ans);

                          console.log(ans);
                          console.log(temp);

                      })
            }
    }

    render(){
        return  <div className="inputArea">
                    <ul className="botAnswers">
                        {this.state.answer}
                    </ul>
                    <span className="admin">{moment().format('LT')} root :</span>
                    <input onKeyPress={this.handleEnter} onChange={this.handleChange} type="text" id="consoleInput"/>
                </div>
    }
}
export default class Console extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return  <div className="console">
                    <TitleBar/>
                    <ConsoleArea/>
                    <InputArea/>
                </div>
    }
}