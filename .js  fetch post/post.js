let container=document.getElementById('display')

fetch('https://jsonplaceholder.typicode.com/todos?_page=0&_limit=10')
.then(res=> res.json())
.then(data =>{
    data.map((post) => {
        return container.innerHTML += `<p>${post.title}</p>`
    })

})
display.style.cssText += 'color:red;background-color:yellow;';

// .then(data => {
//    return data.map(post => div.innerHTML += `<p>${post.title}</p>)`)
// })
