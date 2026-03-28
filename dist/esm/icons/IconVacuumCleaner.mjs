import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconVacuumCleaner = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16h.01",
      stroke: color
    })]
  });
}));
export { IconVacuumCleaner };
