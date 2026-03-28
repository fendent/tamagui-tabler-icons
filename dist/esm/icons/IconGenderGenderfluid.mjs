import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGenderGenderfluid = themed(memo(function (props) {
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
      d: "M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.464 14l3 -5.196",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.536 15.195l3 -5.196",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9l-6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 8.5l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21l-6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 7v-4h4",
      stroke: color
    })]
  });
}));
export { IconGenderGenderfluid };
