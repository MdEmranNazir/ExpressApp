const express = require('express');

const app = express();

// Import
const routers = require('./routers/user');

app.use(express.json());

// Router
app.use('/api/users', routers);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`server running on port ${PORT}`); });
