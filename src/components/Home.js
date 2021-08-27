import React from 'react';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div>
        <h2 style={{color:"blue"}}>Interview Task</h2>
        <a href="/resources"> Resources</a>
      </div>    

    );
  }
}