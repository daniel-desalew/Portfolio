import About from "../models/About.js";

export const getAbout = async (req, res, next) => {
  try {
    res.json(await About.findOne());
  } catch (e) {
    next(e);
  }
};
