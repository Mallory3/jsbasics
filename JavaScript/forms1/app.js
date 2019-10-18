/* JSON is packaging complicated objects into something simple that can be sent to a server */
/* JSON.parse(dataString) (stringify) turns a string back into an objects */


/*posting with festch */

/* a url */
// const url = 'https://now-server.orangeman.now.sh/api/form1'

// const apiData = {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'john',
//         email: 'john@eaxmple.com',
//         comment:'my comment' 
//     })
// }

// /* if you want to customize whhat you are doing, you give it an 'object' ie apiData to narrow down the results */

// fetch(url, apiData)
//     .then(x =>  x.json())
//     .then(x => {
//       console.log(x)
//     })


const getUrl = 'https://now-server.orangeman.now.sh/api/tweet'

const apiData = {
    method: 'POST',
    body: JSON.stringify({
      twitterHandle: 'string',
      tweet: 'string' 
    })
}

fetch(getUrl, apiData)
    .then(x => x.json())
    .then(x => {
        if (x.error) {
            throw x.error
        }
         
        console.log(x)
    })
    .catch(err => {
        console.log(err)
    })