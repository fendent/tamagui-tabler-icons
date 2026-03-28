import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCarSuspension = themed(memo(function (props) {
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
      d: "M12 22a3 3 0 1 1 0 -6a3 3 0 0 1 0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 2h-2v2h2v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11l6 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 14l6 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 8l6 -1",
      stroke: color
    })]
  });
}));
export { IconCarSuspension };
