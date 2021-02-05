<h1> Quick Express Routing Test </h1>

<p> This application was created to reproduce a routing set up as described by a Contrast user. 
With the idea that the routing configuration was causing a bug with how we report the route titles to vulnerability findings </p>

<h2> How to use <h2>
<p> You'll want to make sure you have NodeJS installed on your machine as well as a valid contrast_security.yaml in the application's root directory. Then you can take the following steps to start the application and test the Contrast functionality 

1. run `npm install`
2. run `node -r @contrast/agent src/index.js`
3. visit http://localhost:3000/test/routes/profile?data=data
4. View the XSS finding in the Contrast UI

</p>