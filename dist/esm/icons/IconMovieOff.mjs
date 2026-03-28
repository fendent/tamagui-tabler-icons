import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMovieOff = themed(memo(function (props) {
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
      d: "M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8v12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4v8m0 4v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h8m4 0h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMovieOff };
