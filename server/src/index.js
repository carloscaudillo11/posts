import app from "./app.js";
import { PORT } from "./config.js";
import connectDB from "./db.js";

const main = async () => {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
};

main();
