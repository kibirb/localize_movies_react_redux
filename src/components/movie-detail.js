import React, { Component } from 'react';
import {connect} from 'react-redux'

class MovieDetail extends Component {
	render() {
		if (!this.props.movie) {
			return (
				<div>Click one of the movies to see details.</div>
			);
		}
		return (
			<div>
 				<h4>Title: {this.props.movie.name}</h4>
				<div>Description: {this.props.movie.detail}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  };
}

export default connect(mapStateToProps)(MovieDetail)
