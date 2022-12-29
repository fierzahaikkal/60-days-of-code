import Posts from "./model.js";

export const getPosts = async (req, res) => {
  try {
    const response = await Posts.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getPostById = async (req, res) => {
  try {
    const response = await Posts.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const createPosts = async (req, res) => {
  try {
    await Posts.create(req.body);
    res.status(201).json({ msg: "Posts created" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePosts = async (req, res) => {
  try {
    await Posts.update(req.body, { where: { id: req.params.id } });
    res.status(201).json({ msg: "Posts updated" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    await Posts.destroy({ where: { id: req.params.id } });
    res.status(201).json({ msg: "Posts deleted" });
  } catch (err) {
    console.log(err.message);
  }
};
