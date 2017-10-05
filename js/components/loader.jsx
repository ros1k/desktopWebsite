import React from 'react'


export default class MainLoader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            grub: []
        }

    }
    componentDidMount(){
            this.begin();

    }
    begin = () =>{
        const grubArray = [
            <div>Grub Loading</div>,
            <div>Welcome to Grub</div>,
        ]
        const loadingArray = [
            <div className="line">Loading Linux 3.2.0-4-amd64 ...</div>,
            <div className="line">Loading initial ramdisk  ...</div>,
            <div className="line"> </div>,
            <div className="line">Loading, please wait ...</div>,
            <div className="line">[    2.194785] sd 0:0:0:0: [sda] Assuming drive cache: write through</div>,
            <div className="line">[    2.195284] sd 0:0:0:0: [sda] Assuming drive cache: write through</div>,
            <div className="line">[    2.196163] sd 0:0:0:0: [sda] Assuming drive cache: write through</div>,
            <div className="line">INIT: version 2.88 booting</div>,
            <div className="line">[<span className="bl">info</span>] Using makefile-style concurrent boot in runlevel S.</div>,
            <div className="line">[ <span className="gn">ok</span> ] Starting the hot plug events dispatcher: udevd.</div>,
            <div className="line">done.</div>,
            <div className="line">[ <span className="gn">ok</span> ] Waiting for /dev to be fully populated...[    3.061484] Error: Driver 'pc spkr' is already registered, aborting...</div>,
            <div className="line">done.</div>,
            <div className="line">[ <span className="gn">ok</span> ] Setting preliminary keymap...done.</div>,
            <div className="line">[ <span className="gn">ok</span> ] Activating swap...done.</div>,
        ]

        const loadSystem = new Promise(()=>{
            this.grub = setTimeout()
        })
        let counter = 0;
        this.fistTimeout = setTimeout(()=>{
            let copy = this.state.grub.slice()
            let line = <div>Grub Loading</div>;
            copy.push(line);
            this.setState({
                grub: copy,
            });
            this.secondTimeout = setTimeout(()=>{
                let copy = this.state.grub.slice()
                let line = <div>Welcome to Grub</div>;
                copy.push(line);
                this.setState({
                    grub: copy,
                });
                this.reset= setTimeout(()=>{
                    this.setState({
                        grub: [],
                    })
                },1000)
            },200)
        },300)

        this.loadSystem = setTimeout(()=>{
            let copy = this.state.grub.slice()
            copy.push(loadingArray[0]);
            this.setState({
                grub: copy,
            },this.elem1 = setTimeout(()=>{
                let copy = this.state.grub.slice()
                copy.push(loadingArray[1]);
                this.setState({
                    grub: copy,
                },this.elem2 = setTimeout(()=>{
                    let copy = this.state.grub.slice()
                    copy.push(loadingArray[2]);
                    this.setState({
                        grub: copy,
                    },this.elem3 = setTimeout(()=>{
                        let copy = this.state.grub.slice()
                        copy.push(loadingArray[3]);
                        this.setState({
                            grub: copy,
                        },this.elem4 = setTimeout(()=>{
                            let copy = this.state.grub.slice()
                            copy.push(loadingArray[4]);
                            this.setState({
                                grub: copy,
                            },this.elem5 = setTimeout(()=>{
                                let copy = this.state.grub.slice()
                                copy.push(loadingArray[5]);
                                this.setState({
                                    grub: copy,
                                },this.elem6 = setTimeout(()=>{
                                    let copy = this.state.grub.slice()
                                    copy.push(loadingArray[6]);
                                    this.setState({
                                        grub: copy,
                                    },this.elem7 = setTimeout(()=>{
                                        let copy = this.state.grub.slice()
                                        copy.push(loadingArray[7]);
                                        this.setState({
                                            grub: copy,
                                        })
                                    },200))
                                },200))
                            },200))
                        },200))
                    },500))
                },500))
            },500));
        },3000)

    }
    render(){
        return  <div className="mainLoader">
                    {this.state.grub}
                </div>
    }
    componentWillUnmount(){


    }
}