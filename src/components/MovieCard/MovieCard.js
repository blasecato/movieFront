import React from 'react';


class MovieCard extends React.Component{

  state = {
    
  }

  

  

  render(){
    return (
      <div >
        <h3>{this.props.id} {this.props.name}</h3>
      </div>
    );
  }
}

export default MovieCard;
