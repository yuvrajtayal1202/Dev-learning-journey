const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page ');
        return;
    } else if(req.url === '/about'){
        res.end('Welcome to our about page ');
        return;
    } else {
        res.end(`
            <h1>Oops!!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href = "/">Back Home</a>
        `);
    }
});

server.listen(5000);