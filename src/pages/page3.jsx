
import { Component } from 'react';
import Image1 from '../images/3.png'
import './page3.css'
import Button_L from '../images/button_L2.png'
import axios from 'axios';
import Myalert from './alert.jsx'
import qs from 'qs'
export default class page3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeid: true,
      myDream: '',
      gender:'',
      age: '',
      major:'',
      sentok:false,
      wrongmsg:'',
      showalert:false
    }

    this.lastpage = this.lastpage.bind(this)
    this.changetype = this.changetype.bind(this)
    this.sentIt = this.sentIt.bind(this)
  }

  componentDidMount() {
    var tmp = document.getElementById('page3')
    tmp.style.display='none';




    
    // console.log(this.state.data);
    

  }
  componentDidUpdate() {

    if(this.props.showquery && this.state.typeid) this.changetype()

    var tmp = document.getElementById('page3');
    
    var cur = this.props.curpage;
    // console.log(this.props.curpage);

    if(this.props.curpage == 3 && this.props.lastcur != 3) {
      tmp.style.display='flex';
      tmp.style.animation='mymove3 1s';
      tmp.style.WebkitAnimation='mymove3 1s'
    }
    else if(this.props.curpage != 3 && this.props.lastcur == 3) {

      tmp.style.display='flex';
      tmp.style.animation='mymove3-1 1s';
      tmp.style.WebkitAnimation='mymove3-1 1s';
    }

    tmp.onanimationend = function() {
      // console.log(cur);
      if(cur == 3) {
        tmp.style.display='flex';
      }
      else tmp.style.display='none';
    }

  }

  lastpage = ()=> {
    this.props.lastpage?.()
  }

  changetype() {
    this.setState({typeid:false})
    var tmp = document.getElementById('p8');
    var tmp2 = document.getElementById('p7')
    tmp.style.display = 'none';
    tmp2.style.animation='textmove 0.5s;'
    tmp2.style.WebkitAnimation='textmove 0.5s;'
    
    tmp2.onanimationend = function() {
      tmp.style.display='block';
    }
  }
  inputChange1() {
    let val = this.refs.box1.value;
    this.setState({myDream:val})
  }
  inputChange2() {
    let val = this.refs.box2.value;
    this.setState({gender:val})
  }
  inputChange3() {
    let val = this.refs.box3.value;
    this.setState({age:val})
  }
  inputChange4() {
    let val = this.refs.box4.value;
    this.setState({major:val})
  }
  closealert() {
    this.setState({showalert:false});
  }
  sentIt() {

    var x;
    if(this.state.age == '' || this.state.gender == '' || this.state.major == '' || this.state.sex == '') {
      
      this.setState({wrongmsg:'信息不可为空'})
      this.setState({showalert:true})
      return;
    }
    if(this.state.gender == '男') x = 0;
    else if(this.state.gender == '女') x = 1;
    else {
      this.setState({wrongmsg:'性别不符合要求'})
      this.setState({showalert:true})
      return;
    }
    if(this.state.age <= 0 || this.state.age > 100) {
      this.setState({wrongmsg:'年龄格式错误'})
      this.setState({showalert:true})
      return;
      
    }
    axios.request({
      url:'http://ftp.swsdu.online/collection/add',
      method:'post',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: qs.stringify({
        "sex": x,
        "department": this.state.major,
        "comment":this.state.myDream,
        "age":this.state.age
      })
    }).then((res) => {
      console.log(res)

      this.setState({wrongmsg:'恭喜你，提交成功！'})
      this.setState({sentok:true})
      this.setState({showalert:true})
    
    }).catch(()=>{
      this.setState({wrongmsg:'网络错误'})
      this.setState({showalert:true})
    
    })
  }


  render() {

    return(
      <div id='page3' className='page3-mymainbody' style={{height:'100%',width:'100%'}}>
        
        <div className={this.state.typeid?'page3-mybody':'page3-mybody2'}>
          <div className='page3-toppic' onClick={this.changetype}>
              {/* <img id="img" src={Image1}></img> */}

              {/* <div className='page3-Click' onClick={this.changetype}> */}

              {/* </div> */}
          </div>

          <img style={{display:this.state.typeid?'flex':'none'}}id="page3-buttonl" src={Button_L} onClick={this.lastpage}></img>
        </div>

        <div style={{display:this.state.typeid?'none':'block'}} className='querybody'>
        </div>
        <div style={{display:this.state.typeid?'none':'block'}} className='textContainer'>
          <p className='texttop' id='p1' >疫情给我们带来了许多的遗憾</p>
          <p className='texttop' id='p2'>相信阴霾终会散去</p>
          <p className='texttop' id='p3'>光明即将到来</p>
          <p className='texttop' id='p4'>希望见到想见的人</p>
          <p className='texttop' id='p5'>去到想去的地方</p>
          <p className='texttop' id='p6'>我们的希望都有希望</p>
          <p className='texttop' id='p7'>疫情结束后我最想做的一件事是:</p>
          <div className='mainForm' id='p8' >
            <input maxLength='20' ref='box1' className='form' onChange={()=>this.inputChange1()}></input>
            <div className='sonForm'>
              <p>性别：</p>
              <input maxLength='1'ref = 'box2' className='form' id="form2" onChange={()=>this.inputChange2()}></input>
              <p>年龄：</p>
              <input type='number' ref = 'box3' className='form' id="form2" onChange={()=>this.inputChange3()}></input>
            </div>
            <div className='sonForm'>
              <p>专业：</p>
              <input ref='box4' maxLength='30' style={{width:'70%'}}className='form' onChange={()=>this.inputChange4()}></input>
            </div>
            <div className='submitbutton'>
              <button id='sub' onClick={()=>this.sentIt()}>提交</button>
            </div>
          </div>
        </div>
        <Myalert sentok={this.state.sentok} closeit={()=>this.closealert()}show={this.state.showalert} msg={this.state.wrongmsg}></Myalert>
      </div>
    );
  }
}
