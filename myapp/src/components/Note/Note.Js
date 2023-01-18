import React, { Component } from 'react'

export default class Note extends Component {

  clickHandler(id){
console.log('Remove shod');
this.props.onRemove(id)
  }


  render() {
    
    return (
      <div>
        <div className="card shadow-sm rounded" 
        style={{  }}
        onClick= {this.clickHandler.bind(this, this.props.id)}>

          <p className="card-text p-3">{this.props.title} </p>

          </div>
      </div>
    )
  }
}

// let {title, color} = this.props
// {title} 
// backgroundColor: color 

