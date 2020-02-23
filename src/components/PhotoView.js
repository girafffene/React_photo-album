import React, { useEffect, useState } from "react"
import { getPicture, getAlbums } from "../actions/albums"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"

export default props => {
  const [picture, setPicture] = useState({})
  const [albums, setAlbum] = useState([])

  useEffect(() => {
    getPicture(props.match.params.id).then(resp => {
      setPicture(resp)
    })
    getAlbums(props.match.params.id).then(resp => {
      setAlbum(resp)
    })
  }, [props.match.params])

  return (
    <div>
      <h1 className="pictureName">
        <Link className="arrow" to={"/"}>
          <FaChevronCircleLeft />
        </Link>
        {picture.name}
      </h1>
      <img src={picture.url} />
    </div>
  )
}
