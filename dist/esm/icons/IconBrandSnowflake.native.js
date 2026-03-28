import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandSnowflake = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M14 21v-5.5l4.5 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 21v-5.5l-4.5 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.5 14.5l4.5 -2.5l-4.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.5 9.5l-4.5 2.5l4.5 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 3v5.5l-4.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 3v5.5l4.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 11l1 1l-1 1l-1 -1l1 -1",
      stroke: color
    })]
  });
}));
export { IconBrandSnowflake };
