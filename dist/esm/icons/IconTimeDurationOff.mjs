import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTimeDurationOff = themed(memo(function (props) {
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
      d: "M3 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 19.8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.2 16.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.2 7.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconTimeDurationOff };
