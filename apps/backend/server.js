/* requiring dotenv package */
const dotenv = require("dotenv");
/* requiring dotenv package */
const app = require("./app.js");

/* dotenv reads the .env file and loads its variables into process.env.*/
dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
