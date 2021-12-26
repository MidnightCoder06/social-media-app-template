Roadmap
1. json web token & localstorage 
       
2. Set up Microsoft Azure for postgres & host the app on azure

3. codebase cleanup & add more typescript

4. add tests (jest, mocha & chai) (not react testing library)



You now have a working local API and an application that requests a token using a username and password. But there is still a problem. The token is currently stored using a local state, which means that it is stored in JavaScript memory. If you open a new window, tab, or even just refresh the page, you will lose the token and the user will need to login again. This will be addressed in the next step.

In this step you created a local API and a login page for your application. You learned how to create a Node server to send a token and how to call the server and store the token from a login component. In the next step, you’ll learn how to store the user token so that a session will persist across page refreshes or tabs.

There are several options for storing tokens. Every option has costs and benefits. In brief the options are: storing in JavaScript memory, storing in sessionStorage, storing in localStorage, and storing in a cookie. The primary trade-off is security. Any information that is stored outside of the memory of the current application is vulnerable to Cross-Site Scripting (XSS) attacks. The danger is that if a malicious user is able to load code into your application, it can access localStorage, sessionStorage, and any cookie that is also accessible to your application. The benefit of the non-memory storage methods is that you can reduce the number of times a user will need to log in to create a better user experience.

This tutorial will cover sessionStorage and localStorage, since these are more modern than using cookies.

Notes on localstorage:

Unlike sessionStorage, localStorage will save data even after the session ends. This can be more convenient, since it lets users open multiple windows and tabs without a new login, but it does have some security problems. If the user shares their computer, they will remain logged in to the application even though they close the browser. It will be the user’s responsibility to explicitly log out. The next user would have immediate access to the application without a login. It’s a risk, but the convenience may be worth it for some applications.


Session storage is implemented in this app.