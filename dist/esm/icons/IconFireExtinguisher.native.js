import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFireExtinguisher = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 16h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 5l-4 -1l4 -1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4h-3a3 3 0 0 0 -3 3",
      stroke: color
    })]
  });
}));
export { IconFireExtinguisher };
