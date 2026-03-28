import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGenderTransgender = themed(memo(function (props) {
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
      d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 9l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 7v-4h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9l-6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 7v-4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 8.5l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 19h5",
      stroke: color
    })]
  });
}));
export { IconGenderTransgender };
