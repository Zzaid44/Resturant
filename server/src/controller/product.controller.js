import Category from "../models/categories.Model.js"
import Product from "../models/product.Model.js"


export const createProduct = async (req, res) => {
    try {
        
        const { name, description, price, stock, catId, image } = req.body

      
        if (!name || !price || !stock || !catId) {
            return res.status(400).json({ message: "all feilds are required!" })
        }
        if (name.length < 3) {
            return res.status(400).json({ message: "name must be more than 2 letters" })
        }
        if (price <= 0 || stock < 0) {
            return res.status(400).json({ message: "stock and price should be valid positive integer" })
        }


        const category = await Category.findById(catId)
        if (!category) {
            return res.status(404).json({ message: "the category you sent is not found!" })
        }

        const product = await Product.create({ name, description, price, stock, catId, image })
        if (!product) {
            return res.status(400).json({ message: "the products has not been created successfully, please try" })
        }
        return res.status(201).json({ message: "product created successfully", product })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}


export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("catId", "name description")
        if (products.length === 0) {
            return res.status(200).json({ message: "no products yet", products: [] })
        }

        return res.status(200).json({ message: " products get", products })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "no item selected" })
        }
        const product = await Product.findById(id).populate("catId", "name description")
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        return res.status(200).json({ message: " product get", product })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export const getProductsByCatId = async (req, res) => {
    try {
        const { id } = req.params
        if (id) {
            return res.status(400).json({ message: "no item selected" })
        }
        const products = await Product.find({ catId: id }).populate("catId", "name description")
        if (products.length === 0) {
            return res.status(200).json({ message: "category does not have products", products: [] })
        }
        return res.status(200).json({ message: " product get", products })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export const updateProduct = async (req, res) => {
    try {
        // read new data, and the id
        const { name, description, price, stock, catId, image } = req.body
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "no item selected" })
        }
        if (name) {
            if (name.length < 3) {
                return res.status(400).json({ message: "name must be more than 2 letters" })
            }
        }
        if (catId) {
            const category = await Category.findById(catId)
            if (!category) {
                return res.status(404).json({ message: "the category you sent is not found!" })
            }
        }
            if (price) {
            if (price < 0) {
                return res.status(400).json({ message: "new price must ne valid positive number" })
            }
        }
        if (stock) {
            if (stock < 0) {
                return res.status(400).json({ message: "new stock must ne valid positive number" })
            }
        }
        const newProduct = await Product.findByIdAndUpdate(
            id,
            { name, description, price, stock, catId, image },
            {
                new: true,
                runValidators: true, timestamps: true
            }
        )
        if (!newProduct) {
            return res.status(400).json({ message: "could not be updated" })
        }
        return res.status(200).json({ message: "updated", product: newProduct })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "no item selected" })
        }
        const deleted = await Product.findByIdAndDelete(id)
        if (!deleted) {
            return res.status(404).json({ message: "item not found" })
        }
        return res.status(200).json({ message: "deleted" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}