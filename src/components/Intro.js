import React, { Component } from 'react';
import { Button, Container, Divider, Feed, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import myImg from '../../public/me.jpg';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {  } = this.state;
    return (
      <Sidebar.Pusher id="home-screen">
        <Segment basic>
          <img src={myImg} className="ui medium image  my-image"/>
          <Container textAlign="left" fluid>
            <Header as='h1'>Hey, I'm Jia</Header>
            <Header as='h2'>a Software Developer</Header>
            <Header as='h3'>I am living in Canada now</Header>
            <Header as='h3'>I am working as a developer/analyst at Forte Consulting.Ltd</Header>
            <Header as='h3'>I graduated from University of Victoria, Software Engineering</Header>
            <Header as='h3'>I have experience in web development and data visualization field</Header>
            <Header as='h3'>I have experience with Javascript, Typescript, HTML5, Scss, Python, C#, Oracle SQL, REST API</Header>
            <Header as='h3'>I familiar with UI frameworks like React, React-Redux</Header>
            <Header as='h3'>I familiar with UI styling frameworks like BlueprintJs, SemanticUI, MaterialUI</Header>
            <Header as='h3'>I have experience with GIS data integration platform and tools like FME, Autodesk</Header>
          </Container>
        </Segment>
      </Sidebar.Pusher>
   );
  }
}

export default Intro;