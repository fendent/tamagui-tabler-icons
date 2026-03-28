import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconUnlink = themed(memo(function (props) {
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
      d: "M17 22v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 17h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 7h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 2v2",
      stroke: color
    })]
  });
}));
export { IconUnlink };
