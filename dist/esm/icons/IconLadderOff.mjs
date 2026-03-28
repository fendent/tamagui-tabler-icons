import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLadderOff = themed(memo(function (props) {
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
      d: "M8 3v1m0 4v13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3v9m0 4v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 14h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10h2m4 0h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 6h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 18h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconLadderOff };
