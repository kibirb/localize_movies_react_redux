import React, { Component } from 'react'
import MovieList from './movie-lists'
import MovieDetail from './movie-detail'
import GeneralSettings from './GeneralSettings'

export default class App extends Component {
  render() {
    return (
      <div>
      	<MovieList />
      	<MovieDetail />
	<GeneralSettings />
      </div>
    );
  }
}
