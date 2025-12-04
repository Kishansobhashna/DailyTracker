import { Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function TopInvoiceBorder({ height = 16 }) {
  const width = Dimensions.get("window").width - 28;
  const circleRadius = 7.98;
  const spacing = circleRadius * 2;
  const circles = Math.ceil(width / spacing);

  return (
    <Svg width={width} height={height} style={{ backgroundColor: "#ffffff" }}>
      {Array.from({ length: circles }).map((_, i) => (
        <Circle
          key={i}
          cx={i * spacing + circleRadius}
          cy={0}
          r={circleRadius}
          fill="#e9f0ff"
        />
      ))}
    </Svg>
  );
}
