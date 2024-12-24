const { createServer } = require('http');
const { spawn } = require('child_process');

const server = createServer((req, res) => {
    const php = spawn('php', ['-f', './public_html/index.php']);
    php.stdout.pipe(res);
    php.stderr.pipe(res);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
