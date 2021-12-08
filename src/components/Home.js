import React, { Component } from 'react';
import { Button, Container, Divider, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Intro from './Intro';
import SignPanel from './SignPanel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false,
      sidebarVisible: false,
      panel: 'intro',
    }
  }

  inviteToggle = () => {
    this.setState({overlayActive: !this.state.overlayActive});
  }

  setVisible = () => {
    this.setState({sidebarVisible: !this.state.sidebarVisible});
  }

  changePanel(e){
    this.setState({panel: e});
  }

  render() {
    const { overlayActive, sidebarVisible, panel } = this.state;
    return (
      <div>
        <Container fluid>
          <Container fluid>
            <Button
              className="side-bar-toggle"
              icon='angle double down'
              la="true"
              label="contents"
              onClick={this.setVisible}
            />
            <Header as='h3' id="page-title">
              Welcome to my Portfolio
            </Header>
          </Container>

          <Container id="page-content" fluid>
            <Sidebar.Pushable as={Segment} id="side-bar">
              <Sidebar
                as={Menu}
                animation="scale down"
                icon='labeled'
                inverted
                vertical
                visible = {sidebarVisible}
                width='thin'
              >
                <Menu.Item as='a'>
                  <Icon name='home' value='intro' onClick={() => this.changePanel('intro')}/>
                  Home
                </Menu.Item>
              </Sidebar>

              {panel === 'intro' && <Intro />}

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