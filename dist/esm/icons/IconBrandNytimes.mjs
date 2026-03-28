import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandNytimes = themed(memo(function (props) {
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
      d: "M11.036 5.058a8 8 0 1 0 8.706 9.965",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v-11l-7.5 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 13h-.01",
      stroke: color
    })]
  });
}));
export { IconBrandNytimes };
