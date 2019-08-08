const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let startPoints;
  let pointPerMeter;
  switch (hillSize) {
    case ("mamooth"):
      startPoints = 120;
      pointPerMeter = 1.2;
      break;
    case ("large"):
      startPoints = 60;
      pointPerMeter = 1.8;
      break;
    case ("normal"):
      startPoints = 60;
      pointPerMeter = 2;
      break;
  }
  return (((distance - kPoint) * pointPerMeter) + startPoints);
};

module.exports = calculateDistancePoints;