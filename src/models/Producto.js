import { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      //required: true,
    },
    marca: {
      type: String,
      //required: true,
    },
    modelo: {
      type: String,
      //required: true,
    },
    precio: {
      type: Number,
      //required: true,
    },
    estado: {
      type: String,
      //required: true,
    },
    imagen: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Producto", productoSchema);
