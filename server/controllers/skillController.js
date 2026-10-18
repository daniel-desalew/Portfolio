import Skill from "../models/Skill.js";

export const getSkills = async (req, res, next) => {
  try {
    res.json(await Skill.find());
  } catch (e) {
    next(e);
  }
};
