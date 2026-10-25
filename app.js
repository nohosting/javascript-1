// const section = document.querySelectorAll('.accordion');

// section.forEach(function(section){
//     const panel = section.nextElementSibling;

//     section.addEventListener('click', function() {
//         panel.classList.toggle('show');
//         section.classList.toggle('active');
//     })
// });




// const sections = document.querySelectorAll('.accordion');

// function toggle() {
//     this.classList.toggle('active');
//     this.nextElementSibling.classList.toggle('show');
// }

// sections.forEach((section) => section.addEventListener('click', toggle));




// document.querySelectorAll('.accordion').forEach((item) => {
//     item.addEventListener('click', function() {
//         item.classList.toggle('active');
//         item.nextElementSibling.classList.toggle('show');
//     })
// })


// const btn = document.querySelector('button');
// const inputs = document.querySelectorAll('input');

// const form = document.querySelector('form');

// inputs.forEach((input) => input.addEventListener('keypress', handleEvent));
// btn.addEventListener('submit', handleSubmit);


// function handleEvent(event){
//     if(event.key === 'Enter') {
//         event.preventDefault();
//         event.target.nextElementSibling.focus();
//     }
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     console.log('send');
//     validate();
// }

// function validate() {
//     inputs.forEach((input) => {
//         if (!input.value.trim()) {
//             input.style.borderColor = 'red';
//         } else {
//             input.style.borderColor = 'currentColor';
//         }
//     });
// }







// const registeredUsers = [
//     ['admin', 'KoI18'],
//     ['manager', 'SuperMe108'],
//     ['editor', '12345'],
// ];

// const inputs = document.querySelectorAll('input');
// const form = document.querySelector('form');
// const login = document.querySelector('input[name="login"]');
// const password = document.querySelector('input[name="password"]');


// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event){
//     event.preventDefault();
//     validate()
// }

// function validate() {
//     if(!login.value.trim() || !password.value.trim()) {
//         console.log('All fields are required');
//         return;
//     }
//     for(let user of registeredUsers) {
//         if(login.value === user[0] && password.value === user[1]) {
//             login.value = '';
//             password.value = '';
//             return console.log('Access granted');
//         };
//     }
//      console.log('Incorrect login or password');  
// }









// const registeredUsers = [
//     ['admin', 'KoI18'],
//     ['manager', 'SuperMe108'],
//     ['editor', '12345'],
// ];

// const form = document.querySelector('form');
// const login = document.querySelector('[name="login"]');
// const password = document.querySelector('[name="password"]');

// form.addEventListener('submit', handlesSubmit);

// function handlesSubmit(event) {
//     event.preventDefault();
//     validate();
// }

// function validate() {
//     if(!login.value.trim() || !password.value.trim()) {
//         return console.log("All fields are required");
//     }
//     for(user of registeredUsers) {
//         if(login.value === user[0] && password.value === user[1]) {
//             login.value = '';
//             password.value = '';
//             return console.log("Access granted");
//         }
//     }
//     console.log("Incorrect login or password");
// }





// const registeredUsers = [
//     ['admin', 'KoI18'],
//     ['manager', 'SuperMe108'],
//     ['editor', '12345'],
// ];

// const form = document.querySelector('form');
// const login = document.querySelector('[name="login"]');
// const password = document.querySelector('[name="password"]');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     validate();
// }

// function validate() {
//         if(!login.value.trim() || !password.value.trim()) {
//             return console.log("All fields are required");
//         }
//         for(let user of registeredUsers) {
//             if(login.value === user[0] && password.value === user[1]) {
//                 login.value = '';
//                 password.value = '';
//                 return console.log("Access granted");
//             }
//         }
//         console.log("Incorrect login or password");
//     }




// const registeredUsers = [
//     ['admin', 'KoI18'],
//     ['manager', 'SuperMe108'],
//     ['editor', '12345'],
// ];

// document.querySelector('form').addEventListener('submit', handleSubmit);
// const login = document.querySelector('[name="login"]');
// const password = document.querySelector('[name="password"]');



// function handleSubmit(event) {
//     event.preventDefault();
//     validation();
// }

// function validation() {
//     if(!login.value.trim() || !password.value.trim()) {
//         return console.log('Заполните все поля');
//     }
//     for(let key of registeredUsers) {
//         if(login.value === key[0] && password.value === key[1]) {
//             login.value = '';
//             password.value = '';
//             return console.log('Данные верны. Добро пожаловать')
//         }
//     }
//     console.log('Такого пользователя не существует');
// }



// const list = document.getElementById('todos');
// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick() {
//     const newTodo = this.previousElementSibling.value.trim();

//     if(newTodo) {
//         createTodo(newTodo);
//         this.previousElementSibling.value = '';
//     } else {
//         alert('Вы ничего не написали');
//     }
// }

// function createTodo(text) {
//     const li = document.createElement('li');
//     li.innerText = text;
//     li.className = 'todo-item';
//     li.addEventListener('click', removeTodo);

//     list.append(li);
// }

// function removeTodo() {
//     this.removeEventListener('click', removeTodo);
//     this.remove();
// }












// const btn = document.getElementById('myBtn');
// const modal = document.getElementById('myModal');
// const modalContent = document.querySelector('.modal-content');
// const closeBtn = document.querySelector('span');

// btn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);


// function openModal() {
//     modal.classList.add('open');
// }

// function closeModal() {
//     modal.classList.remove('open');
// }

// window.addEventListener('click', function(event) {
//     if(event.target === modal) {
//         closeModal();
//     }
// });

// window.addEventListener('keydown', function(event) {
//     if(event.key === 'Escape' && modal.classList.contains('open')) {
//         closeModal();
//     }
// })





// const btn = document.getElementById('myBtn');
// const modal = document.getElementById('myModal');
// const modalContent = document.querySelector('.modal-content');

// btn.addEventListener('click', openModal);


// function openModal() {
//     modal.classList.add('open');
//     attachModalEvent()    
// }

// function attachModalEvent() {
//     modal.querySelector('.close').addEventListener('click', closeModal);
//     document.addEventListener('keydown', eventKey);
//     document.addEventListener('click', targetModal);
// }

// function closeModal() {
//     modal.classList.remove('open');
//     detachModalEvent();
// }

// function targetModal(event) {
//     if(event.target === modal) {
//         closeModal();
//     }
// };

// function eventKey(event) {
//     if(event.key === 'Escape' && modal.classList.contains('open')) {
//         closeModal();
//     }
// };

// function detachModalEvent() {
//     modal.querySelector('.close').removeEventListener('click', closeModal);
//     document.removeEventListener('keydown', closeModal);
// }












const button = document.querySelector('button');
const todos = document.getElementById('todos');
document.addEventListener('DOMContentLoaded', loadTodos)

button.addEventListener('click', handleClick);

function handleClick() {
    const textTodo = this.previousElementSibling.value.trim();
    if(textTodo) {
        createTodo(textTodo);
        saveToStorage(textTodo);
        this.previousElementSibling.value = '';
    } else {
        alert('Пустое поле todo');
    }
}



function createTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.className = 'close';
    li.addEventListener('click', removeTodo);

    todos.prepend(li);
}

function saveToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];

    localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
}




function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('tasks'));

    if(todos) {
        todos.forEach(element => {
            createTodo(element);
        });
    }
}



function removeTodo() {
    const text = this.innerText;
    this.removeEventListener('click', removeTodo);
    this.remove();
    removeToStorage(text);
}

function removeToStorage(text) {
    let todos = JSON.parse(localStorage.getItem('tasks')) || [];
    
    todos = todos.filter((task) => task !== text);
    localStorage.setItem('tasks', JSON.stringify(todos));
}


