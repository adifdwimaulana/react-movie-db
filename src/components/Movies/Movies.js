const poster_url = "https://image.tmdb.org/t/p/w185";

function Movies({ movies }) {
  return movies.map((movie) => (
    <table key={movie.id} style={{ marginLeft: 10, marginRight: 10 }}>
      <tbody>
        <tr>
          <td>
            <img
              src={poster_url + movie.poster_path}
              style={{ width: 100, borderRadius: 15 }}
              alt="poster"
            />
          </td>
          <td style={{ display: "block", paddingLeft: 10 }}>
            <h4>{movie.title}</h4>
            <p>Rating : {movie.vote_average}</p>
            <p style={{ marginTop: 8 }}>{movie.overview}</p>
            <input
              style={viewBtn}
              type="button"
              value="V iew"
              onClick={this.props.viewMovie.bind(this, movie.id)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  ));
}

const viewBtn = {
  backgroundColor: "#058c15",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "10px",
};

export default Movies;
