import React, { Component } from 'react';
import { Accordion, Button, Container, Divider, Feed, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import myImg from '../../public/me.jpg';
import _ from 'lodash';
import blogs from "../../blogs.json";

class WebPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {  } = this.state;
    return (
      <Sidebar.Pusher className="main-content">
        <Segment basic>
          <Container textAlign="left" fluid>
            <Accordion
              defaultActiveIndex={[]}
              panels={blogs.web}
              exclusive={false}
              fluid
            />
          </Container>
        </Segment>
      </Sidebar.Pusher>
   );
  }
}

export default WebPanel;