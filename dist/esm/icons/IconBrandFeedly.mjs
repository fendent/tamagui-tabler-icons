import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandFeedly = themed(memo(function (props) {
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
      d: "M7.833 12.278l4.445 -4.445",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.055 14.5l2.223 -2.222",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.278 16.722l.555 -.555",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172",
      stroke: color
    })]
  });
}));
export { IconBrandFeedly };
