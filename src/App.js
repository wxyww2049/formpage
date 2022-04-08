import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'
import Page3 from './pages/page3.jsx'
import bgm from './images/bgm.mp3'
import music1 from './images/music.png'
import music2 from './images/music2.png'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      lastcur: 0,
      showquery:false,
      autoshow:true,
      
    }
    this.nextpage = this.nextpage.bind(this)
    this.lastpage = this.lastpage.bind(this)
  }
  sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
  });
  async componentDidMount() {

    await this.sleep(1500);
    if(this.state.autoshow) {
      this.setState({lastcur:1})
      this.setState({current:2})
    

    }
    await this.sleep(1500);
    if(this.state.autoshow) {
      this.setState({lastcur:2})
      this.setState({current:3})  
    }
    await this.sleep(2500);
    if(this.state.autoshow) {
      this.setState({showquery:true})
    }
  }
  playit() {
    // console.log('playit!')
    var mybgm = document.getElementById('mybgm');
    var tmp = document.getElementById('playit');
    if(mybgm.paused) {
      mybgm.play();
      tmp.src=music1;
    }
    else {
      tmp.src=music2;
      mybgm.pause();
  
    }
  }
  nextpage() {
    this.setState({autoshow:false})
    if(this.state.current != 3){
      this.setState({lastcur:this.state.current})
      this.setState({current:this.state.current+1});
    }
    
    // console.log(this.state.current);
  }
  lastpage() {
    
    this.setState({autoshow:false})
    if(this.state.current != 1) {
      this.setState({lastcur:this.state.current})
      this.setState({current:this.state.current-1});
    }
    
    // console.log(this.state.current);
  }

  render() {

    return(
      <div className='Mainbody'>
          <audio src={bgm} loop id='mybgm'></audio>
          <Page1 curpage={this.state.current}  lastcur={this.state.lastcur} nextpage={()=>this.nextpage()}></Page1>
        

          <Page2 curpage={this.state.current} lastcur={this.state.lastcur} nextpage={()=>this.nextpage()} lastpage={()=>this.lastpage()}></Page2>
    
          <Page3 showquery={this.state.showquery} curpage={this.state.current} lastcur={this.state.lastcur} lastpage={()=>this.lastpage()}></Page3>
        
     
          <img  id='playit' onClick={()=>this.playit()} src={music2}></img>
      </div>
    );
  }
}
