import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhotoSensor3 = themed(memo(function (props) {
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
      d: "M17 4h1a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 17v1a2 2 0 0 1 -2 2h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 20h-1a2 2 0 0 1 -2 -2v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 7v-1a2 2 0 0 1 2 -2h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12h-2",
      stroke: color
    })]
  });
}));
export { IconPhotoSensor3 };
