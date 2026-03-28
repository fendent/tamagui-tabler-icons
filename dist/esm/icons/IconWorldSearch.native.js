import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWorldSearch = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -9 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.6 15h7.9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.5 3a17 17 0 0 0 0 18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.5 3a16.984 16.984 0 0 1 2.574 8.62",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.2 20.2l1.8 1.8",
      stroke: color
    })]
  });
}));
export { IconWorldSearch };
