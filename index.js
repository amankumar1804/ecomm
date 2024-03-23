const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    // Your route handling code here
    resp.send('node is working')
});

// Additional code...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
