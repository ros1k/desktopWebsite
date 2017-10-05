import React from 'react';
import moment from 'moment'
import 'moment/locale/pl'


class LinuxName extends React.Component{
    render(){
        return <span className="linuxTitle">Damian's Desktop</span>
    }
}
class ActiveIcons extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            number: 0,
        }
    }
    randomnumber = () => {

        
    }
    componentDidMount(){
        const wifiURL = "../../assets/wifi"
        this.randomGenerator = setInterval(()=>{
            let number = Math.floor(Math.random() * (10 - 1) + 1);
            this.setState({
                numeber: number,
            })
            if(number < 2){
                document.querySelector(".top_bar .activeIcons img").src = wifiURL + 0 + ".png"
            }else if (number < 5){
                document.querySelector(".top_bar .activeIcons img").src = wifiURL + 1 + ".png"
            }else if (number < 7){
                document.querySelector(".top_bar .activeIcons img").src = wifiURL + 2 + ".png"
            }else if (number < 10){
                document.querySelector(".top_bar .activeIcons img").src = wifiURL + 3 + ".png"
            }else if (number == 10){
                document.querySelector(".top_bar .activeIcons img").src = wifiURL + 4 + ".png"
            }
        },4000)

    }
    render(){
        return <div className="activeIcons">
            <img src="../../assets/wifi0.png" alt="" width="25px" height="25px"/>
                        <Time/>
                    <div>  </div>
                </div>
    }
}

class Time extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            actualTime: moment().format('LTS'),
        }
    }
    componentDidMount(){
        this.getDate = setInterval(this.getTime,1000)

    }
    getTime = ()=>{
        let time = moment().format('LTS')
        this.setState({
            actualTime: ""+time,
        })
    }
    render(){

        return <div className="actualTime">{this.state.actualTime}</div>
    }
    componentWillUnmount(){
        clearInterval(this.getDate)
    }


}

class Bar extends React.Component{
    render(){
        return <div className="top_bar">
                    <LinuxName/>
                    <ActiveIcons/>
                </div>
    }
}

export default class TopBar extends React.Component{
    render(){
        return  <Bar>
                    {this.props.childrens}
                </Bar>
    }

}