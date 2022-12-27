import { Sequelize, DataTypes } from "sequelize";
import db from "./conn.js";

const Posts = db.define(
  "posts",
  { title: DataTypes.STRING, content: DataTypes.STRING },
  { freezeTableName: true }
);

export default Posts;

(async () => {
  await db.sync();
})();
