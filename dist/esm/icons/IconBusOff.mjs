import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBusOff = themed(memo(function (props) {
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
      d: "M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.18 16.172a2 2 0 0 0 2.652 2.648",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 5l1.5 7h4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 10h8m4 0h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 7v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBusOff };
