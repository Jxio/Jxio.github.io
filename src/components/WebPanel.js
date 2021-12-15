import React, { Component } from 'react';
import { Accordion, Container, Header, Segment, Sidebar } from 'semantic-ui-react';
import _ from 'lodash';
import * as blogs from "../../blogs";

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
            <Header as='h1'>Web Dev Notes</Header>
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