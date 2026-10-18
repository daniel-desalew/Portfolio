import Project from "../models/Project.js";

export const getProjects = async (req, res, next) => {
  try {
    res.json(await Project.find().sort("-createdAt"));
  } catch (e) {
    next(e);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const p = await Project.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Project not found" });
    res.json(p);
  } catch (e) {
    next(e);
  }
};

export const createProject = async (req, res, next) => {
  try {
    res.status(201).json(await Project.create(req.body));
  } catch (e) {
    next(e);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const p = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!p) return res.status(404).json({ message: "Project not found" });
    res.json(p);
  } catch (e) {
    next(e);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (e) {
    next(e);
  }
};
