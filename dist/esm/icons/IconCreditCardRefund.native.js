import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCreditCardRefund = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 10h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 15h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 19h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 16l-3 3l3 3",
      stroke: color
    })]
  });
}));
export { IconCreditCardRefund };
