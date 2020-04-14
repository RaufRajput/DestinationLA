function createNode(element) {
    return document.createElement(element);

}

function append(parent, el) {
    return parent.appendChild(el);

}

const ul = document.getElementById('test');
const url = 'js/surfBeaches1.json';
let data;
data.Beaches4Surfers = data;
data.Beaches4Surfers[0].Beach = undefined;
let todo;
todo.Info = undefined;
fetch(url)
    .then((resp) =>resp.json())
    .then(function (data) {
        console.log(data.Beaches4Surfers);
        console.log(" Surf Beaches in LA " + data.Beaches4Surfers[0].Beach);
        let Beaches4Surfers = data.Beaches4Surfers;
        return Beaches4Surfers.map(function (todo) {
            let li = createNode('li');
            li.innerHTML = todo.Beach + " " + todo.Info;
            append(ul, li);

        })

    })
    .catch(function (error) {
        console.log(error);

    });




