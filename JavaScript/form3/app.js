const saveBlogPost = (blog) => {
  const getUrl = 'https://now-server.orangeman.now.sh/api/blog'
  return fetch(getUrl, {
      method: 'POST',
      body: JSON.stringify({
          title: blog.title,
          author: blog.author,
          blogBody: blog.body
      })
  })
  .then(x => x.json())
  .then(x => {
      if (x.error) {
          throw x.error
      }
      
      setStatus('')
      console.log(x)
      
  })
  .catch(err => {
      console.log(err)
  })
}

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const body = document.querySelector('#body')
const sub = document.querySelector('#submit')

sub.addEventListener('click', x => {
  x.preventDefault()

  // ... write validation here before saving blog post
  if(title.value.length === 0) {
    title.getElementsByClassName.borderColor = 'red'
    setStatus('you need a title')
    return 
  } else {
    title.getElementsByClassName.borderColor = 'black'
  }

  if(author.value.length === 0) {
    author.getElementsByClassName.borderColor = 'red'
    setStatus('you need a author')
    return 
  } else {
    author.getElementsByClassName.borderColor = 'black'
  }
  
  saveBlogPost({
      title: title.value,
      author: author.value,
      body: body.value
  })
})