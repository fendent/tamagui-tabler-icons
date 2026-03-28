import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLoadBalancer = themed(memo(function (props) {
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
      d: "M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 10v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6l3 -3l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 10v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6l3 -3l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.894 12.227l6.11 -2.224",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.159 8.21l3.845 1.793l-1.793 3.845",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.101 12.214l-6.075 -2.211",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.871 8.21l-3.845 1.793l1.793 3.845",
      stroke: color
    })]
  });
}));
export { IconLoadBalancer };
