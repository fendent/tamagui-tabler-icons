import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandSuperhuman = themed(memo(function (props) {
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
      d: "M16 12l4 3l-8 7l-8 -7l4 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3l-8 6l8 6l8 -6l-8 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h8",
      stroke: color
    })]
  });
}));
export { IconBrandSuperhuman };
