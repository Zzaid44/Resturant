import Category from "../model/categories.Model.js";

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name.trim()) {
      return res.status(400).json({ message: "you shuld enter a name" });
    }
    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "category name must be more than 3 charecter" });
    }
    const isExist = await Category.findOne({ name });
    if (isExist) {
      return res
        .status(400)
        .json({ message: "this categore name is already exist! " });
    }

    const category = Category.create({ name, description });

    if (!category) {
      return res
        .status(400)
        .json({ message: "somthing went wrong! please try agin later" });
    }
    return res

      .status(201)
      .json({ message: "category created successfully", category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(200).json({
        message: "there is not categories on our stoer yet. ",
        categories: [],
      });
    }
    return res.status(200).json({ message: "categories fetch ", categories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getAllCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "no item selected!" });
    }
    const category = await Category.findById({ id });
    if (!category) {
      return res.status(404).json({ message: "item not found" });
    }
    return res.status(200).json({ message: "found", category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getAllCategoryByName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "pleaes enter a name" });
    }
    const category = await Category.findOne({ name });
    if (!category) {
      return res
        .status(400)
        .json({ message: "item with this name is not found" });
    }
    return res.status(200).json({ message: "found", category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;
    const isExist = await Category.findOne({ name, _id: { $ne: id } });
    if (!id) {
      return res.status(400).json({ message: "item not seleteced!" });
    }

    if (isExist) {
      return res
        .status(400)
        .json({ message: "this categore name is already exist! " });
    }

    const categore = await Category.findByIdAndUpdate(
      id,
      { name, description },
      {
        new: true,
        runValidators: true,
        timestamps: true,
      },
    );

    if (!category) {
      return res.status(400).json({
        message: "somthing went wrong while updating! item not found",
      });
    }
    return res.status(200).json({ message: "updated successfully", category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
export const deleteCategory = async (eq, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "no item selected!" });
    }
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "item not found" });
    }
    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
