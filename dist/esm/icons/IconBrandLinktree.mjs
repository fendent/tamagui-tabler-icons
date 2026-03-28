import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandLinktree = themed(memo(function (props) {
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
      d: "M4 10h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 4.5l11 11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 15.5l11 -11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 10v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15v7",
      stroke: color
    })]
  });
}));
export { IconBrandLinktree };
