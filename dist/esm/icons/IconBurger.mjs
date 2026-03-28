import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBurger = themed(memo(function (props) {
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
      d: "M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12h14",
      stroke: color
    })]
  });
}));
export { IconBurger };
