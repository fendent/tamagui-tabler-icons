import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBusStop = themed(memo(function (props) {
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
      d: "M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 5h7c2.761 0 5 3.134 5 7v5h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 17h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 5l1.5 7h4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 10h7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 9v11",
      stroke: color
    })]
  });
}));
export { IconBusStop };
