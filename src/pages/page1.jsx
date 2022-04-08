
import { Component } from 'react';
import Image1 from '../images/1-1.png'
import Image2 from '../images/1-2.png'
import './page1.css'
import Button_r from '../images/button_wr.png'
import button_r from '../images/button_R.png'
import pub from '../shared.js'
export default class page1 extends Component {
  
  constructor(props) {
    super(props)
    this.nextpage = this.nextpage.bind(this)
  }

  componentDidMount() {
    var tmp = document.getElementById('page1')
    tmp.style.display='block';
}
  componentDidUpdate() {

    var tmp = document.getElementById('page1');
    
    var cur = this.props.curpage;
    // console.log(this.props.lastcur);

    if(this.props.curpage == 1 && this.props.lastcur != 1) {
      tmp.style.display='block';
      tmp.style.animation='mymove1 1s';
      tmp.style.WebkitAnimation='mymove1 1s'
    }
    else if(this.props.curpage != 1 && this.props.lastcur == 1) {
      tmp.style.display='block';
      tmp.style.animation='mymove1-1 1s';
      tmp.style.WebkitAnimation='mymove1-1 1s';
    }

    tmp.onanimationend = function() {
      if(cur == 1) {
        tmp.style.display='block';
      }
      else tmp.style.display='none';
    }

  }

  nextpage = ()=> {
    this.props.nextpage?.()
  }

  render() {

    return(
      <div id = 'page1' className='page1-mybody' style={{height:window.screen.height}}>
        <div className='page1-toppic'>
            <img id="page1-img1" src={Image1}></img>
        </div>
        <div className='page1-bottompic'>
            <img id="page1-img1" src={Image2}></img>
            <img id="page1-BR" src={Button_r}></img>
            <img id="page1-Br" src={button_r} onClick={this.nextpage}></img>
        </div>
      </div>
    );
  }
}
