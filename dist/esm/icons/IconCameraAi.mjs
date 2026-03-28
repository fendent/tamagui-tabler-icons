import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCameraAi = themed(memo(function (props) {
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
      d: "M10 20h-5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.362 11.15a3 3 0 1 0 -4.144 4.263",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 21v-4a2 2 0 1 1 4 0v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 19h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15v6",
      stroke: color
    })]
  });
}));
export { IconCameraAi };
