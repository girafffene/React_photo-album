import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AlbumList from "./AlbumList"
import AlbumView from "./AlbumView"
import PhotoView from "./PhotoView"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" exact component={AlbumList} />
        <Route path="/album/:id" component={AlbumView} />
        <Route path="/photo/:id" component={PhotoView} />
      </div>
    </Router>
  )
}
