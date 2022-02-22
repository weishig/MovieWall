import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import { Route, Routes , Link} from "react-router-dom";
import AddPhoto from "./AddPhoto";
import {connect} from 'react-redux'
import { startLoadingComments, startloadingPost} from '../redux/actions'
import { createBrowserHistory } from 'history';
import Single from './Single'

class Main extends Component {

  componentDidMount(){
    this.props.dispatch(startloadingPost())
    this.props.dispatch(startLoadingComments())
  }
  render() {
    const history=createBrowserHistory();
    return (
      <div>
        <h1>
         <Link to="/"> Movie Wall</Link>
        </h1>
        <Routes> 
          <Route path="/" element={<PhotoWall {...this.props}/>} />

          <Route path="/AddPhoto" element={<AddPhoto {...this.props} onHistory={history}/>} />
          
          <Route path="/single/:id"  element={<Single  {...this.props}/> } />
        </Routes>

        <Link className="goBack" to="/"> Go back </Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      posts:state
  }
}
export default connect(mapStateToProps)(Main);


