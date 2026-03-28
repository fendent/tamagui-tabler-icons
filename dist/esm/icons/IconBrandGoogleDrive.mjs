import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandGoogleDrive = themed(memo(function (props) {
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
      d: "M12 10l-6 10l-3 -5l6 -10l3 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15h12l-3 5h-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15l-6 -10h6l6 10l-6 0",
      stroke: color
    })]
  });
}));
export { IconBrandGoogleDrive };
