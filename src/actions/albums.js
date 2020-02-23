import axios from "axios"

export function getAlbums() {
  return new Promise((resolve, reject) => {
    axios
      .get("/albums")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getAlbum(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/albums/${id}?_embed=photos`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getPicture(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/photos/${id}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getAlbumList() {
  return new Promise((resolve, reject) => {
    axios.get(`/albums/`).then(resp => {
      resolve(resp.data)
    })
  })
}
