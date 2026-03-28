import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWorldWww = themed(memo(function (props) {
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
      d: "M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 3a16.989 16.989 0 0 0 -1.826 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 3a16.989 16.989 0 0 1 1.828 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 21a16.989 16.989 0 0 1 -1.826 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 21a16.989 16.989 0 0 0 1.828 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 10l1 4l1.5 -4l1.5 4l1 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 10l1 4l1.5 -4l1.5 4l1 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 10l1 4l1.5 -4l1.5 4l1 -4",
      stroke: color
    })]
  });
}));
export { IconWorldWww };
