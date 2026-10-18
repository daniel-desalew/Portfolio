export const notFound = (req, res) =>
  res.status(404).json({ message: "Route not found" });

export const errorHandler = (err, req, res, next) => {
  const bad = err.name === "ValidationError" || err.name === "CastError";
  res.status(bad ? 400 : err.status || 500).json({ message: err.message });
};
