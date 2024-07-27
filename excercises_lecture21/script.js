const app = () => {

const baseURL = 'https://fakestoreapi.com'
const userURL ='/users'
const productsURL = '/products'

const loginForm = document.getElementById("login")
const loginButton = document.getElementById("login-button")
const catalog = document.getElementById("catalog")

const loginHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData(loginForm)
    const userName = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({ email, userName, password})
    }
    try{
        const response = await fetch(baseURL+userURL, requestOptions)
        if(!response.ok){
            throw new Error('not ok')
        }
        const data = await response.json()
        localStorage.setItem('userId', data.id)
        console.log(data);
    }catch(error){
        alert(error)
    }
    


alert('click')
}



loginButton.addEventListener('click', loginHandler)

const handleDelete = async (event, id) => {
    
    try{
        const response = await fetch(`${baseURL}${productsURL}/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return true

    }catch(error){
    alert(error)
    return false
    }

}

const loadCatalog = async () => {
    try{
        const response = await fetch(baseURL + productsURL)
        if(!response.ok){
            throw new Error ('not ok products fetch')
        }
        const data = await response.json()
        data.forEach(product => {
            console.log(product);
            const container = document.createElement('div')
            container.innerHTML = `
            <p>${product.title}</p>
            <p>${product.description}</p>
            <p>${product.price.toFixed(2)}$</p>
            `

        const deleteButton = document.createElement('button')
            deleteButton.innerText = 'delete'
            deleteButton.addEventListener ('click', async (event)=> {
            
            if(confirm('are you sure?')){
                const isOKay = await handleDelete(event, product.id)
                console.log(isOKay);
                if(isOKay){
                    container.remove()
                }
            }

        })
            
        container.appendChild(deleteButton)

        catalog.appendChild(container)
    });

    } catch(error){
        alert(error)
    }


}
loadCatalog()
}





window.addEventListener('load', app)