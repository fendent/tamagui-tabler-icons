import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFountain = themed(memo(function (props) {
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
      d: "M9 16v-5a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 16v-5a2 2 0 1 1 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v-10a3 3 0 0 1 6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 6a3 3 0 0 1 6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2",
      stroke: color
    })]
  });
}));
export { IconFountain };
