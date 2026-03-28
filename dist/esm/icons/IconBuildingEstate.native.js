import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingEstate = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 21v-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 17v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 13h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 9h2",
      stroke: color
    })]
  });
}));
export { IconBuildingEstate };
