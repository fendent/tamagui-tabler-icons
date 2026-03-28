import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunset2 = themed(memo(function (props) {
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
      d: "M3 13h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 13h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.6 6.6l.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.4 6.6l-.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13a4 4 0 1 1 8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 20h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v-1",
      stroke: color
    })]
  });
}));
export { IconSunset2 };
