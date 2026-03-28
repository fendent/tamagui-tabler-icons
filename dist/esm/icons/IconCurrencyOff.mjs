import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyOff = themed(memo(function (props) {
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
      d: "M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 4l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 20l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCurrencyOff };
