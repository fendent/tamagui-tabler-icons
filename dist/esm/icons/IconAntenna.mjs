import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAntenna = themed(memo(function (props) {
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
      d: "M20 4v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4.5v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 5.5v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8h-16",
      stroke: color
    })]
  });
}));
export { IconAntenna };
