import React, { Component } from 'react';
import  Button  from './components/Button';
import './App.css';
import {connect} from 'react-redux';
import {IncAC,DecAC} from './containers/userInfoApp/action';
import {getBarState,getBarState1,getBarState2} from './containers/userInfoApp/selector';
import { createStructuredSelector } from 'reselect';


class App extends Component { 
  render() {
    
    const {name,email,image} = this.props;
    // const list= val.map((item,i)=>{return <li key={i}>{item.email}</li>})
    return (
      <div className="App">
    
   
      <h3>Name:  </h3> <h4>{name}</h4> <br/>
      <h3>Email:  </h3><h4>{email}</h4> <br/>
      <h3>Image:</h3> <br/> 

   <img src={image} height="100px" width="100px" alt="" className="image"/><br/><br/>  
    <div className="flex">
      <div> <Button className='btn' onClickHandler={this.props.increment} btnName='Click me to Add Details' /></div>
       <div><Button className='btn' onClickHandler={this.props.decrement} btnName='Click me to Delete Details' /></div>
       </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({

  name: getBarState,
  email: getBarState1,
  image: getBarState2
})

 
  



const mapDispatchToProps = (dispatch)=> {

  return {
  
      increment: ()=> {dispatch(IncAC())},
      decrement: ()=> {dispatch(DecAC())}
  
  }
  
  }



export default connect(mapStateToProps,mapDispatchToProps)(App);