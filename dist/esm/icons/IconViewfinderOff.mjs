import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconViewfinderOff = themed(memo(function (props) {
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
      d: "M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconViewfinderOff };
