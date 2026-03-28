import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPresentationAnalytics = themed(memo(function (props) {
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
      d: "M9 12v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 4h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 20h6",
      stroke: color
    })]
  });
}));
export { IconPresentationAnalytics };
