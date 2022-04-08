
import { Component } from 'react';
import Image1 from '../images/2-1.png'
import Image2 from '../images/2-2.png'
import Image3 from '../images/1-2.png'
import Button_r from '../images/button_wr.png'
import button_r from '../images/button_R.png'
import Button_l from '../images/button_wl.png'
import button_l from '../images/button_L1.png'
import './page2.css'
export default class page2 extends Component {
  constructor(props) {
    super(props)
    this.nextpage = this.nextpage.bind(this)
    this.lastpage = this.lastpage.bind(this)
  }

  componentDidMount() {
    var tmp = document.getElementById('page2')
    tmp.style.display='none';

  }
  componentDidUpdate() {

    var tmp = document.getElementById('page2');
    
    var cur = this.props.curpage;
    // console.log(this.props.lastcur);

    if(this.props.curpage == 2 && this.props.lastcur != 2) {
      tmp.style.display='block';
      tmp.style.animation='mymove2 1s';
      tmp.style.WebkitAnimation='mymove2 1s'
    }
    else if(this.props.curpage != 2 && this.props.lastcur == 2) {

      tmp.style.display='block';
      tmp.style.animation='mymove2-1 1s';
      tmp.style.WebkitAnimation='mymove2-1 1s';
    }

    tmp.onanimationend = function() {
      if(cur == 2) {
        tmp.style.display='block';
      }
      else tmp.style.display='none';
    }

  }

  nextpage = ()=> {

    this.props.nextpage?.()
  }
  lastpage = ()=> {
    this.props.lastpage?.()
  }
  render() {

    return(
      <div id='page2' className='page2-mybody1'>
        <div className='page2-toppic'>
            <img id="page2-img1" src={Image1}></img>
            <img id="page2-img2" src={Image2}></img>
        </div>
        <div className='page2-bottompic'>
            <img id="page2-img3" src={Image3}></img>
            
            <img id="page2-BL" src={Button_l}></img>
            <img id="page2-Bl" src={button_l} onClick={this.lastpage}></img>
            <img id="page2-BR" src={Button_r}></img>
            <img id="page2-Br" src={button_r} onClick={this.nextpage}></img>
        </div>
      </div>
    );
  }
}
