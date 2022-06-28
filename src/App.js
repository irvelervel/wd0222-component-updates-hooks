import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import MovieDetails from './components/MovieDetails'
import MovieDropdown from './components/MovieDropdown'

const App = () => {
  // state = {
  //   movieTitle: 'Batman Begins',
  // }

  const [movieTitle, setMovieTitle] = useState('Batman Begins')

  const handleMovieTitle = (newMovie) => {
    // I need to write this function here, because I need to invoke setState
    // in the component I want to change the state of!
    // this.setState({
    //   movieTitle: newMovie,
    // })
    setMovieTitle(newMovie)
  }

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-3 mb-2">
          <Col md={6}>
            <MovieDropdown
              movieTitle={movieTitle} // READ MODE
              handleMovieTitle={handleMovieTitle} // "WRITE" MODE
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3 mb-2">
          <Col md={6}>
            <MovieDetails movieTitle={movieTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
