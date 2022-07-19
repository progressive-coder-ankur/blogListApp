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
  
}

const mostBlogs = (array) => {
  const authors = array.sort((a, b) => a.author === b.author)
  return { author: `${authors[0].author}`, blogs: authors.length }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
}
