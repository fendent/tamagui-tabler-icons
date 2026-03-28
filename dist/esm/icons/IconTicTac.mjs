import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTicTac = themed(memo(function (props) {
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
      d: "M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 8l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconTicTac };
