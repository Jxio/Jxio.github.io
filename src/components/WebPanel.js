import React, { Component } from 'react';
import { Button, Container, Divider, Feed, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import myImg from '../../public/me.jpg';

class WebPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {  } = this.state;
    return (
      <Sidebar.Pusher>
        <Segment basic>
          <Container textAlign="left" fluid>
          </Container>
        </Segment>
      </Sidebar.Pusher>
   );
  }
}

export default WebPanel;