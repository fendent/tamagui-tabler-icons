import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTimeDuration30 = themed(memo(function (props) {
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
      d: "M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 4.2v.01",
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
      d: "M12 21a9 9 0 0 0 0 -18",
      stroke: color
    })]
  });
}));
export { IconTimeDuration30 };
