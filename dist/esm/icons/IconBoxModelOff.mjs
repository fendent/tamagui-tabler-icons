import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBoxModelOff = themed(memo(function (props) {
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
      d: "M12 8h4v4m0 4h-8v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16l3.3 3.3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 8l3.3 -3.3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8l-3.3 -3.3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16l-3.3 3.3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBoxModelOff };
