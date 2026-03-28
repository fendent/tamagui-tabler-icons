import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFeatherOff = themed(memo(function (props) {
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
      d: "M4 20l8 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 5v5h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11v4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 13v5h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 13l3.502 -3.502m2.023 -2.023l2.475 -2.475",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 18l3.499 -3.499m2.008 -2.008l2.493 -2.493",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconFeatherOff };
