const express = require("express");
const app = express();

// # If we are deploying our app into a web server
// # Port 3000 may not be available
// # So we take the environmental variable set for us by the hosting company.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On Port: ${port}.`));
