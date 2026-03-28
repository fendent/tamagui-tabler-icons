import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTimelineEventExclamation = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 20h-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 20h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 6v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 11v.01",
      stroke: color
    })]
  });
}));
export { IconTimelineEventExclamation };
