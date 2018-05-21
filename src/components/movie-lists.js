import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectMovie from '../actions/action_select_movie'
import {bindActionCreators} from 'redux'

class MovieList extends Component {
  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li
        key={movie.phone}
        onClick={() => this.props.selectMovie(movie)}
        className='list-group-item'>{movie.name}</li>
      );
    });
  }
  render() {
    return (
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMovie: selectMovie}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
