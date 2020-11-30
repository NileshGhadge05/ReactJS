import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends Component{

  constructor(){
    super();
    this.state = {
       name:"Join the Avatar World"
    }
  }

  namechange(){
    this.setState({
      name: "Welcome to Avatar World!"
    })
  }

  render() {
    const avatarlistarray = [
      
      {
        id: 1,
        name: "Jack",
        work:"Senior Business Manager"
      },
      {
        id: 2,
        name: "Kaitlyn",
        work: "Software Developer"
      },
      {
        id: 3,
        name: "Shane",
        work: "Web Developer"
      },
      {
        id: 4,
        name: "Ben",
        work: "Frontend Developer"
      }
    ]
    

    return  ( 
      <div className="mainpage">
        <h1> {this.state.name}</h1>

        <Avatarlist id={avatarlistarray[0].name}
                          name={avatarlistarray[0].name} 
                          work={avatarlistarray[0].work} />

        <Avatarlist id={avatarlistarray[1].name} 
                          name={avatarlistarray[1].name} 
                          work={avatarlistarray[1].work} />

        <Avatarlist id={avatarlistarray[2].name} 
                          name={avatarlistarray[2].name} 
                          work={avatarlistarray[2].work} />
                          
        <Avatarlist id={avatarlistarray[3].name}
                          name={avatarlistarray[3].name} 
                          work={avatarlistarray[3].work} />

        <button onClick= { () => this.namechange() }> Subscribe </button>
      </div>
    )
  }
}

export default Avatar;