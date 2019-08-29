const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;  
    if (path === '/') { // Home page
        fs.readFile(__dirname + '/../index.html', function(error, data) {  
            if (error) {  
                res.writeHead(404);  
                res.write('File not found');  
            } else {  
                res.writeHead(200, {'Content-Type': 'text/html'});  
                res.write(data);  
            }
            res.end();    
        });  
    } else if (path.split('.')[1] == 'js') { // Javascript files
        fs.readFile(__dirname + path, function(error, data) {  
            if (error) {  
                res.writeHead(404);  
                res.write('File not found');  
            } else {  
                res.writeHead(200, {'Content-Type': 'application/javascript'});
                res.write(data);  
            }
            res.end();    
        });
    } else if (path.split('.')[1] == 'css') { // Javascript files
        fs.readFile(__dirname + '/..' + path, function(error, data) {  
            if (error) {  
                res.writeHead(404);  
                res.write('File not found');  
            } else {  
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);  
            }
            res.end();    
        });   
    } else { // Page doesn't exist
        res.writeHead(404);  
        res.write("This page doesn't exist.");  
        res.end();  
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

