import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMessage2Code = themed(memo(function (props) {
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
      d: "M8 9h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 21l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17l-2 2l2 2",
      stroke: color
    })]
  });
}));
export { IconMessage2Code };
