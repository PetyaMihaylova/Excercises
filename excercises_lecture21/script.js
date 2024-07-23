const app = () => {

const baseURL = 'https://fakestoreapi.com'
const userURL ='/users'

const loginForm = document.getElementById("login")
const loginButton = document.getElementById("login-button")

const loginHandler = (event) => {
    const formData = new FormData(loginForm)
    const username = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(formData.getAll);
    console.log({username, email, password});

event.preventDefault()
alert('click')
}



loginButton.addEventListener('click', loginHandler)



}

window.addEventListener('load', app)