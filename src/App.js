import React from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header/Header'
import SearchMovie from './components/Movies/SearchMovie'
import Movies from './components/Movies/Movies'

class App extends React.Component{
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9adbf9b696ac935f8dedfac5c6e8948b')
      .then(res => {
        console.log(res.data.results)
        this.setState({ movies: res.data.results })
      })
  }

  onSearch = (title) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=9adbf9b696ac935f8dedfac5c6e8948b`)
      .then(res => {
        console.log(res.data.results)
        this.setState({ movies: res.data.results })
      })
  }

  viewMovie = (id) => {
    console.log(id)
    window.location.href = "https://www.themoviedb.org/movie/" + id
  }

  render() {
    return(
      <div className="App"> 
        <Header />
        <SearchMovie onSearch={this.onSearch}/>
        <h2 style={{ textAlign: 'center' }}>Find your Favorite Movies !!</h2>
        <Movies movies={this.state.movies} viewMovie={this.viewMovie} />
      </div>
    )
  }
}

export default App;

    