const posts = [
    {
        title: 'Post 1',
        body: 'This is the first post'
    },
    {
        title: 'Post 2',
        body: 'Second post'
    }
];

// async await
function getPosts() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.forEach(post => {
                // test for error
                const error = false;
                if (!error) {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(`${post.title}: ${post.body}`));
                    document.getElementById('post').appendChild(li);
                    resolve();
                } else {
                    reject('There\'s an error!');
                }
            })
        }, 1000);
    })
}

async function init() {
    await getPosts();
    // call subsequent functions so they have to wait for getPost
}

init();

// promises
// function getPosts() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             posts.forEach(post => {
//                 // test for error
//                 const error = false;
//                 if (!error) {
//                     const li = document.createElement('li');
//                     li.appendChild(document.createTextNode(`${post.title}: ${post.body}`));
//                     document.getElementById('post').appendChild(li);
//                     resolve();
//                 } else {
//                     reject('There\'s an error!');
//                 }
//             })
//         }, 1000);
//     })
// }

// getPosts()
//     .then()
//     .catch(err => console.log(err));


// callback method
// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(post => {
//             const li = document.createElement('li');
//             li.appendChild(document.createTextNode(`${post.title}: ${post.body}`));
//             document.getElementById('post').appendChild(li);
//         })
//     }, 1000);
// }

// getPosts();

