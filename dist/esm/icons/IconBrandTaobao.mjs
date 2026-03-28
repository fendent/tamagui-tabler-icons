import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandTaobao = themed(memo(function (props) {
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
      d: "M2 5c.968 .555 1.335 1.104 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 10c5.007 3.674 2.85 6.544 0 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 4c-.137 4.137 -2.258 5.286 -3.709 6.684",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 6c2.194 -.8 3.736 -.852 6.056 -.993c4.206 -.158 5.523 2.264 5.803 5.153c.428 4.396 -.077 7.186 -2.117 9.298c-1.188 1.23 -3.238 2.62 -7.207 .259",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 10h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 10v6.493",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 15.512l.853 1.72",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 17c-1.145 .361 -7 3 -8.5 -.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.765 8.539l-1.765 2.461",
      stroke: color
    })]
  });
}));
export { IconBrandTaobao };
