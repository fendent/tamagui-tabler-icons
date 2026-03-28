import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDirectionArrows = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 11l-1 1l1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 8l1 -1l1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 11l1 1l-1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 16l1 1l1 -1",
      stroke: color
    })]
  });
}));
export { IconDirectionArrows };
