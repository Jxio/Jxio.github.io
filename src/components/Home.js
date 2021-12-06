import React, { Component } from 'react';
import { Button, Container, Divider, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import SignPanel from './SignPanel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false,
      sidebarVisible: false,
    }
  }

  inviteToggle = () => {
    this.setState({overlayActive: !this.state.overlayActive});
  }

  setVisible = () => {
    this.setState({sidebarVisible: !this.state.sidebarVisible});
  }

  render() {
    const { overlayActive } = this.state;
    return (
      <div>
        <Container fluid>
          <Header as='h3' id="page-title">
            I'm Jia, a software developer
          </Header>

          <Container id="page-content" fluid>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                onHide={() => setVisible()}
                inverted
                vertical
                visible
                width='thin'
              >
                <Menu.Item as='a'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item as='a'>
                  {/* <Icon name='gamepad' /> */}
                  Games
                </Menu.Item>
                <Menu.Item as='a'>
                  {/* <Icon name='camera' /> */}
                  Channels
                </Menu.Item>
              </Sidebar>
            </Sidebar.Pushable>
          </Container>

          <Container textAlign='center' id="page-footer">
            <p>Website built on React framework, use SemanticUI styling, and Webpack build tool</p>
          </Container>
        </Container>
      </div>
   );
  }
}

export default Home;