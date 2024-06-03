import { exampleProductManager } from "../app.js";
import { Router } from "express";
import { uploader } from "../uploader.js";
import { productsModel } from "../dao/models/products.model.js";
import ProductMDBManager from "../dao/productManager.mdb.js";

let toSendObject = {};  
const router = Router();
const productsCollection = new ProductMDBManager(productsModel);

router.get("/", async (req, res) => {
  toSendObject = await productsCollection.getAllProducts(req.query.limit, req.query.page, req.query.query, req.query.sort, req.query.available, "/api/products");
  res.send(toSendObject);
});
router.get("/:pid", async (req, res) => {
  toSendObject = await productsCollection.getProductById(req.params.pid);
  res.send(toSendObject);
});
router.post("/", uploader.single("thumbnail"), async (req, res) => {
  toSendObject = await productsCollection.addProducts({...req.body, thumbnail: req.file.filename, status: true});
  exampleProductManager.addProduct({...req.body, thumbnail: req.file.filename, status: true});
  res.send(toSendObject);
});
router.put("/:pid", async (req, res) => {
  const {pid} = req.params;
  toSendObject = await productsCollection.updateProductById(pid, req.body);
  exampleProductManager.updateProduct(pid, req.body); 
  res.send(toSendObject);
});
router.delete("/:pid", async (req, res) => {
  const {pid} = req.params;
  toSendObject = await productsCollection.deleteProductById(pid);
  exampleProductManager.deleteProductById(pid);
  res.send(toSendObject);
});

export default router;
