import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconEyeCog = themed(memo(function (props) {
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
      d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.001 15.5v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.001 21v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22.032 17.25l-1.299 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.27 20l-1.3 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.97 17.25l1.3 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.733 20l1.3 .75",
      stroke: color
    })]
  });
}));
export { IconEyeCog };
