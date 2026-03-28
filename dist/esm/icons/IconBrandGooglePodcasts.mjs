import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandGooglePodcasts = themed(memo(function (props) {
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
      d: "M12 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 17v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 5v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19v-8",
      stroke: color
    })]
  });
}));
export { IconBrandGooglePodcasts };
