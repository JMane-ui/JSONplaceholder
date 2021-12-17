var content = document.getElementById('content');


function datos(){
    var select = document.getElementById('select').value;
    //content.innerHTML += select;

    switch (select) {
        case '1':
            content.innerHTML = '';
            consumo('posts');
            break;
        case '2':
            content.innerHTML = '';
            consumo('comments');
            break;
        case '3':
            content.innerHTML = '';
            consumo('albums');
            break;
        case '4':
            content.innerHTML = '';
            consumo('photos');
            break;
        case '5':
            content.innerHTML = '';
            consumo('todos');
            break;
        case '6':
            content.innerHTML = '';
            consumo('users');
            break;
        default:
            content.innerHTML = 'Ha ocurrido un error o no haz seleccionado nada';
            break;
    }
}


function consumo(fuente){
    fetch( `https://jsonplaceholder.typicode.com/${fuente}` )
     .then(res => {
         res.json()
         .then(data => {
             switch (fuente) {
                case 'posts':
                    data.forEach(element => {
                        content.innerHTML += 
                        `
                        <div class="col-sm-12 col-md-4 d-flex justify-content-center p-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title"><b>${element.title}</b></div>
                                    <div class="card-text">${element.body}</div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${element.id}</li>
                                        <li class="list-group-item">ID de usuario: ${element.userId}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                     break;
                case 'comments':
                    data.forEach(element => {
                        content.innerHTML += 
                        `
                        <div class="col-sm-12 col-md-4 d-flex justify-content-center p-4">
                            <div class="card">
                                <div class="card-header">
                                    ${element.email}
                                </div>
                                <div class="card-body">
                                    <div class="card-title"><b>${element.name}</b></div>
                                    <div class="card-text">${element.body}</div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${element.id}</li>
                                        <li class="list-group-item">ID de comentario: ${element.postId}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                     break;
                case 'albums':
                    data.forEach(element => {
                        content.innerHTML += 
                        `
                        <div class="col-sm-12 col-md-4 d-flex justify-content-center p-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title"><b>${element.title}</b></div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${element.id}</li>
                                        <li class="list-group-item">ID de usuario: ${element.userId}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                     break;
                case 'photos':
                    data.forEach(element => {
                        if(element.id > 50){
                            return;
                        }
                        content.innerHTML += 
                        `
                        <div class="col-sm-12 col-md-4 d-flex justify-content-center p-4">
                            <div class="card">
                                <img src="${element.thumbnailUrl}" class="card-img-top" alt="..." style="width:100%;">
                                <div class="card-body">
                                    <div class="card-title"><b>${element.title}</b></div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${element.id}</li>
                                        <li class="list-group-item">ID de album: ${element.albumId}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                    break;
                case 'todos':
                    var typeCard = '';
                    data.forEach(element => {
                        
                        if (!element.completed) {
                            typeCard = `<div class="card text-white bg-danger">`;
                        }else{
                            typeCard = `<div class="card text-white bg-success">`;
                        }

                        content.innerHTML += 
                        `
                        <div class="col-sm-12 col-md-4 d-flex justify-content-center p-4">`
                        +typeCard+`
                                <div class="card-header text-white">
                                    Completado: ${element.completed}
                                </div>
                                <div class="card-body">
                                    <div class="card-title"><b>${element.title}</b></div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${element.id}</li>
                                        <li class="list-group-item">ID de usuario: ${element.userId}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                     break;
                case 'users':
                    data.forEach(element => {
                        content.innerHTML += 
                        `
                        <div class="col-sm-12 col-md-4 d-flex justify-content-center p-4">
                            <div class="card">
                                <div class="card-header">
                                   ID: ${element.id}
                                </div>
                                <div class="card-body">
                                    <div class="card-title">Nombre: <b>${element.name}</b></div>
                                    <div class="card-text"> ${element.email}</div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Nombre de usuario: ${element.username}</li>
                                        <li class="list-group-item">Direccion: ${element.address.street}, ${element.address.city}, ${element.address.zipcode}</li>
                                        <li class="list-group-item">Telefono: ${element.phone}</li>
                                        <li class="list-group-item">Sitio web: <a href="${element.website}" target="_blank">${element.website}</a></li>
                                        <li class="list-group-item">Compania: ${element.company.name}, Frase: ${element.company.catchPhrase}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                     break;
                 default:
                     break;
             }
        })
    })
     .catch(err => {
         console.log(err);
         return;
        })
}