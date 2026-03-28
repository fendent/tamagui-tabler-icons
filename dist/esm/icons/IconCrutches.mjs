import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCrutches = themed(memo(function (props) {
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
      d: "M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 21h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11h4",
      stroke: color
    })]
  });
}));
export { IconCrutches };
