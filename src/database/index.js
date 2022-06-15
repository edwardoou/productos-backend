import { connect } from "mongoose";

//Funcion anonima -> ejecuta directamente la funcion
(async () => {
  try {
    const db = await connect("mongodb://localhost/crud-mongo");
    console.log("Connected to", db.connection.name);
  } catch (error) {
    console.log("Error:", error);
  }
})();
