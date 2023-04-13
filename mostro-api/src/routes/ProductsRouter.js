"use strict";
const { Router } = require("express");
const { Product } = require('../db.js');

const productRouter = Router();


    //---------------RUTA GET------------------//

productRouter.get('/', async (req, res) => {
    const { name } = req.query;
  const allProducts = await Product.findAll();
  try {
    if (name) {
      const product = allProducts.filter(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      product.length
        ? res.status(200).json(product)
        : res.send("Product not found");
    } else {
      const products = allProducts;
      return res.status(200).send(products);
    }
  } catch (error) {
    res.status(400).send(error);
  }

    })


    //---------------RUTA POST------------------//

    productRouter.post("/", async (req, res) => {
    
        try {
          const { name, description, price, image, size, genre, category, color } = req.body;
          const newProduct = await Product.create({
            name,
            description,
            price,
            image,
            size,
            genre,
            category,
            color,
          });
          res.status(201).json(newProduct);
        } catch (error) {
          res.status(400).send(error);
          console.log(error);
        }
      });


module.exports = productRouter;
