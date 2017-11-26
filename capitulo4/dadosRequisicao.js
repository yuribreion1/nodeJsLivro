const http = require('http');

const server = http.createServer((request, response)=>{
    const headers = request.headers;
    const method = request.method;
    const url = request.url;

    console.log("Header:\n" + headers);
    console.log("Method:\n" + method);
    console.log("URL:\n" + url);

    if (request.url == '/teste') {
        response.setHeader('Content-type', 'text/html');
        response.end("Pagina carregada");
    }
});
server.listen(3000);    