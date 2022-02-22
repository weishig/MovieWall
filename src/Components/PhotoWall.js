import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function PhotoWall(props) {

  return (  
    
    <div>
      <Link className="addIcon" to="/AddPhoto"></Link>
    
      <div className="photoGrid">
        {props.posts.posts.map((post, index) => 
          <Photo key={index} post={post} {...props} index={index} />
        )}
      </div>

    </div>
  );
}

PhotoWall.protoTypes = {
  post: PropTypes.array.isRequired,
};


export default PhotoWall
