import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGenderEpicene = themed(memo(function (props) {
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
      d: "M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.536 15.535l5.464 -5.535",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 14l5.464 -5.535",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h.01",
      stroke: color
    })]
  });
}));
export { IconGenderEpicene };
