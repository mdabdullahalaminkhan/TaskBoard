// Import Express Functionality
const app = require("./app");

// Running Server
const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log(`The backend project is running on the port no. ${port}`);
});