import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLollipopOff = themed(memo(function (props) {
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
      d: "M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416 -1.57a7 7 0 1 0 -9.884 -9.915",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 10a3.5 3.5 0 0 0 -7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.71 12.715a3.5 3.5 0 0 1 -5.71 -2.715",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17c.838 0 1.607 -.294 2.209 -.785m1.291 -2.715a3.5 3.5 0 0 0 -3.5 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3a3.5 3.5 0 0 0 -3.5 3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconLollipopOff };
