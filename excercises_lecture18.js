//the idea of Local Storage under Application is to save 
//information about the application. Each time when we open 
//the webpage, the information previously stored in Local Storage 
//is going to be available to us. Local Storage is like forever, 
//until you go there to specifically clean it, it remains there.

//the idea of session storage is to store information,
//insofar as the browser is open, we will be able to reach
//information stored in session storage. After we close the browser,
//we will lose access to this information.

//cookies are a bit different, because they have an expiration date.
//they save info for the user like user name and login, so even if the browser or website is closed,
//if one logs into the site within e.g., 30 days, the automated login would be saved
//so one does not have to type in their username and password manually. each
//time the user logs into the website, their cookie gets refreshed for another e.g., 30 days, so 
//they get a refresh cookie or also called refresh token.
//when one has a valid login cookie, one can get logged in the application
//even while the application is being loaded. if the cookie has expired,
//instead of logging into the application, one gets redirected to the login page.
//cookies are usually set from the backend, but they can also be manipulated from the frontend,
//although it is not a good practice.