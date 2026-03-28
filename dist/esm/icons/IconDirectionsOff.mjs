import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDirectionsOff = themed(memo(function (props) {
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
      d: "M12 21v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 13v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 21h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8v1h1m4 0h6l2 -2l-2 -2h-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14v3h-8l-2 -2l2 -2h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDirectionsOff };
