import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDatabaseMinus = themed(memo(function (props) {
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
      d: "M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6v6c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12v6c0 1.657 3.582 3 8 3c.164 0 .328 -.002 .49 -.006",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19h6",
      stroke: color
    })]
  });
}));
export { IconDatabaseMinus };
