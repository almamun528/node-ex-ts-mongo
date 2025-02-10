// https://www.youtube.com/watch?v=BDeBB9b2L9I&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=25
// tutorial : 15 express Anisul Islam
const express = require("express");
const userRouter = require("./route/user.route")
const app = express();
const PORT = 4000;

app.use(userRouter)

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

// error route
app.use((req, res, next) => {
  res.status(404).json({ message: "req is not match" });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
