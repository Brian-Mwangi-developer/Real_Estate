import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import {authMiddleware} from "./middleware/authMiddleware";
import tenantRoutes from  "./routes/tenantRoutes";
import managerRoutes from  "./routes/managerRoutes";
import propertyRoutes from  "./routes/propertyRoutes";
import leaseRoutes from "./routes/leaseRoutes";
import applicationRoutes from "./routes/applicationRoutes";



//Config
dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("this is the home route")
})

app.use("/applications", applicationRoutes);
app.use("/leases", leaseRoutes);
app.use("/properties", propertyRoutes);
app.use("/tenants",authMiddleware(["tenant"]), tenantRoutes)
app.use("/managers",authMiddleware(["manager"]), managerRoutes)

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})