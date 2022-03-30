"use strict";
import express from "express";
import multer from 'multer';
import { cat_list_get, cat_get, cat_post, cat_delete, cat_update } from "../controllers/catController";

const router = express.Router();
const upload = multer({ dest: './uploads/' });

router.get("/", cat_list_get);
router.get("/:id", cat_get);

router.post("/", upload.single('cat'), cat_post);

router.put("/:id", upload.single('cat'), cat_update);

router.delete("/:id", cat_delete);

export default router;
