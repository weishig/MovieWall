import React, { Component } from "react";
import {startAddingPost} from '../redux/actions'
import {Link} from 'react-router-dom'
class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (description && imageLink) {
      this.props.dispatch(startAddingPost(post))
      this.props.onHistory.push('/')
    }
  }

  render() {
    
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default AddPhoto;
