const app = () => {
//Cookies

const cookieInput = document.getElementById('cookieInput')
const saveCookieButton = document.getElementById('saveCookieButton')
const showCookieButton = document.getElementById('showCookieButton')
const removeCookieButton = document.getElementById('removeCookieButton')
const cookiesValue = document.getElementById('cookieValue')
const handleSaveCookie = () => {
    debugger
    const name = cookieInput.value
    document.cookie = `name=${name}; path=/ ;max-age=3600`;
}

const handleShowCookie = () => {
    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(c=>c.trim())
        cookies[name] = value
        return cookies
    }, {})
}

const handleRemoveCookie = () => {
    document.cookie = `name=${name}; expires=Tue, 01 jan 1970 00:00:00 GMT`

}

showCookieButton.addEventListener('click', handleShowCookie)
saveCookieButton.addEventListener('click', handleSaveCookie)
removeCookieButton.addEventListener('click', handleRemoveCookie)

//Local Storage
const localStorageInput = document.getElementById('localStorageInput')
const saveLocalStorageButton = document.getElementById('saveLocalStorageButton')
const showLocalStorageButton = document.getElementById('showLocalStorageButton')
const removeLocalStorageButton = document.getElementById('removeLocalStorageButton')
const localStorageValue = document.getElementById('localStorageValue')

const handleSaveToLocalStorage = () => {
    const name = localStorageInput.value
    localStorage.setItem('name', name)
    console.log(localStorage);
}
    
const handleShowLocalStorageValue = () => {
    const name = localStorage.getItem('name')//here, we will get the value of 'name', like we do with an object and its index, we get the value
    localStorageValue.innerText = name ? `Local Storage: ${name}`: 'No local storage found'
    }

const handleRemoveFromLocalStorage = () => {
    localStorage.removeItem('name')
    
    } 

saveLocalStorageButton.addEventListener('click', handleSaveToLocalStorage)
showLocalStorageButton.addEventListener('click', handleShowLocalStorageValue)
removeLocalStorageButton.addEventListener('click', handleRemoveFromLocalStorage)

//Session Storage
const sessionStorageInput = document.getElementById('sessionStorageInput')
const showSessionStorageButton = document.getElementById('showSessionStorageButton')
const removeSessionStorageButton = document.getElementById('removeSessionStorageButton')
const sessionStorageValue = document.getElementById('sessionStorageValue')

const handleSaveInSessionStorage = () =>{
   const name = sessionStorageInput.value
   sessionStorage.setItem('name', name)
   console.log('name');
}

const handleShowSessionStorageValue = () => {
    const name = sessionStorage.getItem('name')//here, we will get the value of 'name', like we do with an object and its index, we get the value
    sessionStorageValue.textContent = name ? `Session Storage: ${name}`: 'No session storage found'
}

const handleRemoveFromSessionStorage = () => {
    sessionStorage.removeItem('name')

}

saveSessionStorageButton.addEventListener('click', handleSaveInSessionStorage)
showSessionStorageButton.addEventListener('click', handleShowSessionStorageValue)
removeSessionStorageButton.addEventListener('click', handleRemoveFromSessionStorage)

const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map(c=>c.trim())
    cookies[name] = value
    return cookies
}, {})

if(cookies.name) {

    cookiesValue.textContent = `Cookie: ${cookies.name}`
} else {
    cookiesValue.textContent = 'No Cookie Value Found'
}

if(localStorage.getItem('name')) {//here, we will get the value of 'name', like we do with an object and its index, we get the value
    localStorageValue.innerText =`Local Storage name: ${localStorage.getItem('name')}`
    } else {
        localStorageValue.innerText = 'Nothing found'
    }

if(sessionStorage.getItem('name')) {//here, we will get the value of 'name', like we do with an object and its index, we get the value
    sessionStorageValue.innerText = `Session Storage name: ${sessionStorage.getItem('name')}`
    }else {
        sessionStorageValue.innerText = 'Nothing found'
        }

console.log({cookieStore});


}

//The following is part of the BOM, not DOM. These things are not in the document, they are in the browser:
// window.history //here we have the browser history of the current session, in which we are
// window.history.back() //here we can go back to a previous page from the application we have been to (for non-single page applications)
// window.history.forward() //with this method, we go one step forward
// window.history.go() //we can use window.history.go() to go to a specific place
// window.history.pushState() //we use this method if we want to navigate from a page to the same page, but for it to be changed.
//If we use go(), we cannot navigate from one page to the same page, because it is going to tell us 'You are already here.' This is
//why we use push(). But with push(), we will push the same page to this array, literally, we will push a new history object.
// window.history.replaceState() //will replace the existing page with a new page, and when we go back, the page, from which we are coming, will not exist,
// //because we have replaced it.
// window.history.scrollRestoration()//this is a very nice feature that allows us, when we go to a product and click on it to look at it, then when we go back,
//for the page to go back from the place, where we have scrolled to, instead of starting from the very beginning.

//window.navigation() allows us to work with navigation in the history. 
//window.navigation.canGoForward: true or false

//window.navigator() is different from window.navigation(), and it is not experimental like window.navigation(). window.navigator()
//gives you information about the device, browser, platform, language, geolocation, userActivation


window.addEventListener('load', app)

//The setter - set() method expects to receive, firstly, the key, then the value name-- set(key, value)

//Local Storage and Session storage hold between 5-10 MB, whereas Cookies hold seveal KBs, it is not as much as Local and Session Storage.
//Local Storage would be to keep things, which we want to save for a longer period of time.

//localStorage and sessionStorage, as well as cookies are 3 globally available objects, which are present, without us seeing them. Therefore we can 
//just use them, together with their available methods and we do not have to(re-)create them from scratch.

//In Local Storage, we can save the user's shopping cart, and when the user leaves the page and re-enters it some time after, e.g. several weeks, the basket will be filled with these items.
//Of course, in the real world, once the user logs in, we will see in his Session Storage, whether there is some kind of identifier, and we will return 
//his shopping basket updated from the backend with the same items as before. The items will not be stored locally in the user's computer in Local Storage,
//they will be stored in the backend. This allows for the price of items to also be changed (e.g., because otherwise we will get the old price, which may no longer be true),
// or if there is no  longer some of the items, the basket will get updated based on the identifier accordingly. This allows the user to get promotions, discounted 
//or updated prices, etc.

//When we close the browser, and reopen it, when we press showLocalStorageButton, we will get the info we had saved in Local Storage previously.
//THat is, this info will not disappear the way it would with Session Storage. The only place where this will not be true, would be with the
//anonymous browser or browser in Icognito mode, where it always starts afresh -- that is, there is nothing in Local Storage, nothing in 
//Session Storage, nothing in History, nothing in Cookies.

//you have to save more than 1 key: the text of your to-do,
//the status of your to-do: complete or Not
//and every time the page loads, you have to check
//somewhere, whether you had saved all to-dos, and on that basis
//for each of these to-dos to create the necessary html and js
//to add the eventlisteners and to show them on the page when the page loads
//afterwards, the possibility to add new and remove all todos.
// however, when you close the browser and have to return to your todos, they will be there.

//cookieStore is another globally available object, which is, however, experimental.
//It has some methods like delete(), get(), getAll(), onChange()
//cookieStore is an experimental interface for manipulating cookies, so we do not have to 
//work with them in the same way as above, because it is a bit challenging/irritating.

//Generally, when we use iframes, that is, little windows embedded in our webpage, which lead to other webpages,
//it is difficult to set the iframe in such a way, that the embedded website has no access to the user's cookies,
//local Storage and session Storage.

//Currently, there is an experimental method, which will tell us if an 
//embedded iframe is safe or not. E.g., if we type window.credentialles 
//in the browser console, the result (true/false) will tell us,
//whether the window is not allowed to use the cookies. Since our
//window is allowed to use the cookies, window.credentialless will return false.