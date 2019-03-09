# nodejs-scaffolding
# A basic nodejs web API scaffolding.

The idea of this repository is to have the minimun base to start a node.js project. It includes the basic libraries or dependencies which will be explained here.

To install every library inside our package.json just write npm install.

Let's describe them one by one:

Dependencies:

express: npm install --save express
In official It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. To see the official site see http://expressjs.com/ or its reporitory https://github.com/expressjs/expressjs.com
In my words: it simplifies many things that can be done without express (by using native node features).

body-parser: npm install --save body-parser
It parses incoming request bodies in a middleware before your handlers, available under the req.body property. It's a must have library for web APIs. To see the complete documentation see https://www.npmjs.com/package/body-parser or its official repository https://github.com/expressjs/body-parser
In my words: it also simplifies the basis of a web API (parsing the requests).

method-override: npm install --save method-override
Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. To see the official npm page see https://www.npmjs.com/package/method-override
In my words: it let us use the typical HTTP verbs for requests.

cors: npm install --save cors
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. To see the official npm page see https://www.npmjs.com/package/cors
In my words: it enable the typical cors problems. To enable the endpoints access from different origins.

Conclusion: theese four libraries and necesary for a basic web API. They provide the minimun features that a normal web API should have.

Dev Dependencies:

nodemon: npm install --save-dev nodemon
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.
"scripts": {
    "start": "nodemon server.js"
},

mocha: npm install --save-dev mocha
"scripts": {
    "test": "mocha \"app/tests/**/*.spec.js\""
},

chai: npm install --save-dev chai


