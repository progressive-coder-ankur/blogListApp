const dummy = (array) => {
  return 1
}

const totalLikes = (array) => {
  let arr = []

  const likesArray = () => {
    array.forEach((a) => arr.push(a.likes))
    return arr
  }
  likesArray()

  return arr.length === 1 ? arr[0] : arr.reduce((s, p) => s + p, 0)
}

const favoriteBlog = (array) => {
  const arr = array.sort((a, b) => b.likes - a.likes)
  const result = {
    title: arr[0].title,
    author: arr[0].author,
    likes: arr[0].likes,
  }
  return result
}

const mostBlogs = (array) => {
  let authors = []
  let results = []
  const getAuthors = () => {
    array.forEach((a) => authors.push(a.author))
  }
  getAuthors()
  function countFreq(arr, n) {
    let visited = Array.from({ length: n }, (_, i) => false)

    for (let i = 0; i < n; i++) {
      if (visited[i] === true) continue

      let count = 1
      for (let j = i + 1; j < n; j++) {
        if (arr[i] === arr[j]) {
          visited[j] === true
          count++
        }
      }
      results.push({ author: `${arr[i]}`, blogs: count })
    }
  }
  countFreq(authors, authors.length)
  return results.sort((a, b) => b.blogs - a.blogs)[0]
}

const mostLikes = (array) => {
  const arr = []
  const result = []
  const getArr = () => {
    array.forEach((a) =>
      arr.push({
        author: a.author,
        likes: a.likes,
      }),
    )
  }
  getArr()
  function countFreq(arr, n) {
    let visited = Array.from({ length: n }, (_, i) => false)

    for (let i = 0; i < n; i++) {
      if (visited[i] === true) continue

      let likes = 0
      for (let j = i + 1; j < n; j++) {
        if (arr[i].author === arr[j].author) {
          visited[j] = true
          likes = arr[i].likes + arr[j].likes
        }
      }
      result.push({ author: arr[i].author, likes: likes })
    }
  }
  countFreq(arr, arr.length)
  return result.sort((a, b) => b.likes - a.likes)[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
