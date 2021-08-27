import React from 'react';


export default class ResourceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result : {}
    }
  }

  componentDidMount() {
    fetch(`https://reqres.in/api/unknown/${this.props.location.state.item.resource.id}`)
    .then((response) => response.json())
    .then(resourceList => {
        this.setState({ result: resourceList.data });
    });
}

  render() {
    const colours = ['blue', 'green', 'orange', 'purple', 'red'];
    const getColour = () => colours[Math.floor(Math.random() * colours.length)];
    return (
      <div>
        <h3>Resource Detail Page</h3>
        <div style={{
            border: '1px solid black',
            marginLeft: '90px',
            marginRight: '90px',
            marginBottom: '50px',
            height: '70px',
            width: '250px',
            color: "white",
            backgroundColor: getColour(),
        }}>
            <li>{this.state.result.name}</li>
            <li>{this.state.result.year}</li>
            <li>Panton_value: {this.state.result.pantone_value  }</li>
        </div>
      </div>    

    );
  }
}