import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAd2 = themed(memo(function (props) {
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
      d: "M11.933 5h-6.933v16h13v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17h-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 13h5v-4h-5v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 5v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 6l2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 9h2",
      stroke: color
    })]
  });
}));
export { IconAd2 };
