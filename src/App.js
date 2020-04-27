import React from 'react';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
state={
  sideDrawerOpen: false
}

drawerToggleClickHandler=()=>{
  this.setState((pervState)=>{
    return {sideDrawerOpen: !pervState.sideDrawerOpen}
  })
}

backdropClickHandler =()=>{
  this.setState({sideDrawerOpen: false})
}
  render(){
   
    let backdrop;

    if(this.state.sideDrawerOpen){
      
      backdrop=<Backdrop click ={this.backdropClickHandler}/>
    }
  return (
    <div style={{height:'100%'}}>
      <Toolbar drawerClickHandler= {this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>;
     {backdrop}
      
      <main style={{marginTop: '64px'}}>
        <p>This is the Page Content</p>
        </main>
      
    </div>
  );
}
}

export default App;
