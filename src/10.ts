const createServer = async () => {
    const port = 8080;
    const app = express();

    await app.use(bodyParser.json());

    // define a root route
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    await app.listen(port);
}
