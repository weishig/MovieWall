import React, { Component } from "react";
import {startAddingComment} from '../redux/actions'

class Comments extends Component{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        
        const comment=event.target.elements.comment.value
        
        this.props.dispatch(startAddingComment(comment, this.props.id))
        event.target.elements.comment.value=''
    }
    render(){
        const comments=this.props.comments
        return <div className="comment">
            {
                comments.map((comment, index) => {
                    return (
                        <p key={index}> {comment} </p>
                    )
                })
            }
            <form className="comment-form" onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="comment" name="comment"/>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default Comments