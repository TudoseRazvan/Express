const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page');
    }
    if(req.url === '/about'){
        for(let i = 0; i < 1000; i++) {
            //Blocking code
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} - ${j}`);
            }
        }
    }
    res.end(`
        <h1>About Page</h1>
    `);
})

server.listen(5000, () => {
    console.log('Server is running on port 5000');
})