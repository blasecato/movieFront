import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import './Home.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import {connect} from 'react-redux'
import movieActions from '../../services/Movie/MovieActions'


class Home extends React.Component{

  state = {
    movieName:"toy-story",
    movieList: [
      { id: 1, name: "Toy Story" }, 
      { id: 2, name: "Toy Story 2" }, 
      { id: 3, name: "Toy Story 3" }
    ]
  }

componentDidMount(){
  console.log(this.props.getAll());
}

  setMovieName(event){
    console.log("hola")
    //this.setState({movieName: "toy story 2"});
    this.setState({movieName: event.target.value});
  }


  singup(){
    let newArray = this.state.movieList;
    newArray.push({
      id: this.state.movieList.length+1,
      name: this.state.movieName
    });
    this.setState({movieList: newArray});
  }

  siOut(id){
    let newArray = this.state.movieList;
    newArray.splice(id,1);
    this.setState({movieList: newArray});
  }
  

  render(){
    console.log(this.props.movie);
    const {movieName, movieList}=this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<p>{ this.state.movieName }</p>*/}
          {
            this.state.movieList.map((movie,i) => {

              return(
               /* <div key={movie.id}>
                  <p>{movie.id} {movie.name} </p>
                  <button onClick={() => this.siOut(i)}>eliminar</button>
                </div>
                */
               <MovieCard  key={movie.id} id={movie.id} name={movie.name}/>
              )
            })
          }
          <input type="text" placeholder="nombre pelicula" onChange={(event)=>this.setMovieName(event)}/>
          <br/>
          <button onClick={() => this.singup()}>register movie</button>
        </header>
      </div>
    );
  }
}

const mapSatateToProps =(state)=>{
  return{
    movie: state.movie
  }
}
const mapDispatchToProps ={
  getAll: movieActions.getAll
};

Home = connect(
  mapSatateToProps,
  mapDispatchToProps,
)(Home);
export default Home;
