import React from 'react';

import { Link } from 'react-router-dom';


export default class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        resources: []
    }

  }

  componentDidMount() {
    fetch('https://reqres.in/api/unknown')
    .then((response) => response.json())
    .then(resourceList => {
        this.setState({ resources: resourceList.data });
    });
}
    

  render() {
    const colours = ['blue', 'green', 'orange', 'purple', 'red'];
    const getColour = () => colours[Math.floor(Math.random() * colours.length)];

    return (
      <div>
          <h2>Resources</h2>
          <br></br>
            {this.state.resources.map((resource) => (
                <div key={resource.id} 
                style={{
                    display: "inline-block",
                    border: '1px solid black',
                    marginLeft: '90px',
                    marginRight: '120px',
                    marginBottom: '50px',
                    paddingLeft: '90',
                    height: '70px',
                    width: '200px',
                    color: "white",
                    listStyleType: "none",
                    alignItems: "center",
                    backgroundColor: getColour(),
               }}
                >
                    <Link  style={{ textDecoration: 'none', color: "white" }} 
                    to={{pathname:`/resources/${resource.id}`,    
                    state:{item: {resource} }}}>
                        <li>{resource.name}</li>
                        <li>{resource.year}</li>
                    </Link>
                </div>
            ))}
      </div>    

    );
  }
}