import { exampleCartManager } from "../app.js";
import { Router } from "express";
import { cartsModel } from "../dao/models/carts.model.js";
import CartMDBManager from "../dao/cartManager.mdb.js";
let toSendObject = {};
const router = Router();
const cartsCollection = new CartMDBManager(cartsModel);

router.get("/", async (req, res) => {
  try {
      const cart = await cartsModel.find().lean();
      res.send({status: 1, payload: cart});
  } catch {
     res.send({status: 0, payload: "Lo sentimos, ha ocurrido un error al intentar recibir el carrito."})
  }
});
router.post("/", async (req, res) => {
  exampleCartManager.createCart();
  toSendObject = await cartsCollection.createCartMDB();
  res.status(200).send(toSendObject);
});
router.get("/:cid", async (req, res) => {
  const {cid} = req.params;
  toSendObject = await cartsCollection.getCartById(cid);
  res.status(200).send(toSendObject);
});
router.post("/:cid/product/:pid", async (req, res) => {
  const {pid, cid} = req.params;
  exampleCartManager.addProduct(pid, cid);
  toSendObject = await cartsCollection.addProductMDB(pid, cid);
  res.status(200).send(toSendObject);
});
router.delete("/:cid/product/:pid", async (req, res) => {
  const {pid, cid} = req.params;
  toSendObject = await cartsCollection.deleteProductMDB(pid, cid);
  res.status(200).send(toSendObject);
});
router.put("/:cid", async (req, res) => {
  const {cid} = req.params;
  toSendObject = await cartsCollection.updateCartById(cid, req.body);
  res.status(200).send(toSendObject);
});
router.put("/:cid/product/:pid", async (req, res) => {
  const {pid, cid} = req.params;

  toSendObject = await cartsCollection.updateQuantity(pid, cid, req.body);
  res.status(200).send(toSendObject);
});
router.delete("/:cid", async (req, res) => {
  const {cid} = req.params;
  toSendObject = await cartsCollection.deleteAllProducts(cid);
  res.status(200).send(toSendObject);
});


export default router;