import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFolderCog = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12.5 19h-7.5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.001 15.5v1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.001 21v1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22.032 17.25l-1.299 .75",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.27 20l-1.3 .75",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.97 17.25l1.3 .75",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.733 20l1.3 .75",
      stroke: color
    })]
  });
}));
export { IconFolderCog };
