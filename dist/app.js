"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = require("./db/database");
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: "./config/config.env" });
const port = process.env.PORT || 3000;
(0, database_1.connectDB)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use("/api/v1", UserRoute_1.default);
