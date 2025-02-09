const express = require("express");
const multer = require("multer");
const Saree = require("../models/Products");
const cloudinary = require("../config/cloudinary");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Function to upload images to Cloudinary
const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "sarees" }, 
            (error, result) => {
                if (error) reject(error);
                else resolve(result.secure_url);
            }
        );
        stream.end(fileBuffer);
    });
};

// ✅ **Add Saree Route**
router.post("/add-saree", upload.array("images", 4), async (req, res) => {
    try {
        const { name, description, price, fabric, category, color, stock, workType, occasion, featured } = req.body;

        // Upload all images to Cloudinary
        const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.buffer));
        const imageUrls = await Promise.all(imageUploadPromises);

        // Save saree details in MongoDB
        const newSaree = new Saree({
            name,
            description,
            price,
            fabric,
            category,
            color,
            stock,
            workType,
            occasion,
            featured: featured === "true",
            images: imageUrls, 
        });

        await newSaree.save();
        res.status(201).json({ message: "✅ Saree added successfully!", success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error", success: false });
    }
});

// ✅ **Update Saree Route**
router.put("/update-saree/:id", upload.array("images", 4), async (req, res) => {
    try {
        const sareeId = req.params.id;
        const updateData = req.body;

        // If new images are uploaded, replace old ones
        if (req.files && req.files.length > 0) {
            const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.buffer));
            updateData.images = await Promise.all(imageUploadPromises);
        }

        // Convert featured to Boolean (fixing string issue from frontend)
        if (updateData.featured !== undefined) {
            updateData.featured = updateData.featured === "true";
        }

        const updatedSaree = await Saree.findByIdAndUpdate(sareeId, updateData, { new: true });

        if (!updatedSaree) return res.status(404).json({ message: "Saree not found" });

        res.status(200).json({ message: "✅ Saree updated successfully!", updatedSaree });
    } catch (error) {
        console.error("Error updating saree:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ **Fetch all Sarees**
router.get("/get-saree-data", async (req, res) => {
    try {
        const sarees = await Saree.find();
        res.json(sarees);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sarees", error });
    }
});

module.exports = router;
