
let apiUrl = 'http://localhost'
let apiPort = "4001";


function addToDo(username,title) {
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          id: username,
          title:title
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}
function getToDo(username) {
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          id: username
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}
function getAllToDo(){
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`).then(response => response.json()
        , (error) => {
            console.log(error);
        });
    return res;
}
function deleteToDo(username, title) {
    console.log('Hello')
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'DELETE',
        body: JSON.stringify({
          id: username,
          title: title
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}

export{
    getToDo,
    getAllToDo,
    addToDo,
    deleteToDo
}