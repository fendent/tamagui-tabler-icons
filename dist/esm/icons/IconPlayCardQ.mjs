import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlayCardQ = themed(memo(function (props) {
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
      d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 6h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 14l1.5 1.5",
      stroke: color
    })]
  });
}));
export { IconPlayCardQ };
