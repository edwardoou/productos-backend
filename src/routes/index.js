import { Router } from "express";
import Producto from "../models/Producto";

const router = Router();

router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.send(productos);
});

router.post("/", async (req, res) => {
  const product = Producto(req.body);
  const productSaved = await product.save();
  res.send(productSaved).status(200);
});

router.put("/:id", async (req, res) => {
  const producto = await Producto.updateOne({ _id: req.params.id }, req.body);
  res.send(producto).status(200);
});

router.get("/:id", async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  res.send(producto);
});

router.delete("/:id", async (req, res) => {
  const producto = await Producto.deleteOne({ _id: req.params.id });
  res.send(producto);
});

export default router;
