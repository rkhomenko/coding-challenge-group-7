import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SupperiorMenu extends React.Component { 
    constructor(props) {
        super(props);
  
        this.state = {
            menuAnchorEl: null
        };
    }
    
    handleMenuClick = (event) => {
      this.setState({menuAnchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
      this.setState({menuAnchorEl: null});
    };

    render() {
      return (
        <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleMenuClick}>
        { this.props.user.name }
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={this.state.menuAnchorEl}
        keepMounted
        open={Boolean(this.state.menuAnchorEl)}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
      </Menu>
    </div>
      );
    }
  }
  
  export default SupperiorMenu;