import { Form } from 'react-bootstrap'

// props object = {
//   movieTitle
//   handleMovieTitle
// }

const MovieDropdown = ({ movieTitle, handleMovieTitle }) => {
  return (
    <>
      <h3>Choose your superhero!</h3>
      <Form.Group>
        <Form.Control
          as="select"
          value={movieTitle}
          onChange={(e) => handleMovieTitle(e.target.value)}
        >
          <option>Batman Begins</option>
          <option>Man of Steel</option>
          <option>The Joker</option>
          <option>The Flash</option>
          <option>Wonder Woman</option>
        </Form.Control>
      </Form.Group>
    </>
  )
}

export default MovieDropdown
