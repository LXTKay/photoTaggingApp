export default function getCoordinates(e) {
  const rect = e.target.getBoundingClientRect();
  const coords = [];
  coords.push(e.clientX - rect.left);
  coords.push(e.clientY - rect.top);
  return coords;
};