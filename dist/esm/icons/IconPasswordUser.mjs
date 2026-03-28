import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPasswordUser = themed(memo(function (props) {
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
      d: "M12 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 20l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18l4 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18l4 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 18l4 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2",
      stroke: color
    })]
  });
}));
export { IconPasswordUser };
