import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconViewfinder = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12l-3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l0 .01",
      stroke: color
    })]
  });
}));
export { IconViewfinder };
