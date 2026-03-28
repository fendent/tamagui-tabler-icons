import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPrinterOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20.412 16.416c.363 -.362 .588 -.863 .588 -1.416v-4a2 2 0 0 0 -2 -2h-6m-4 0h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 9v-4a2 2 0 0 0 -2 -2h-6c-.551 0 -1.05 .223 -1.412 .584m-.588 3.416v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconPrinterOff };
