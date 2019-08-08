const calculateStylePoints = (styleNotes) => {
 return (styleNotes.reduce((a, b) => a + b) - Math.min(...styleNotes) - Math.max(...styleNotes))
};

module.exports = calculateStylePoints;