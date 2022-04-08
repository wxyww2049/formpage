
import { Component } from 'react';
import Image1 from '../images/1-1.png'
import Image2 from '../images/1-2.png'
import './page1.css'
import Button_r from '../images/button_wr.png'
import button_r from '../images/button_R.png'
import pub from '../shared.js'
import './alert.css'
export default class alert extends Component {
  
  constructor(props) {
    super(props)
    // this.close = this.close.bind(this);
  }

  componentDidMount() {
}
  componentDidUpdate() {
 
}

close = ()=> {
    
  if(this.props.sentok) {
    window.location.reload();  
  }
    else {
      this.props.closeit?.();

    }
}  

  render() {

    return(
        <div className='alertmain' style={{display:this.props.show?'flex':'none'}}>

                <p id='msg'>{this.props.msg}</p>
                
            <button id = 'closebutton' onClick={this.close}>关闭</button>
        </div>
    );
  }
}
