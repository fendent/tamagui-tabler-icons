import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodBitcoin = themed(memo(function (props) {
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
      d: "M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.87 10.48a9 9 0 1 0 -7.876 10.465",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151",
      stroke: color
    })]
  });
}));
export { IconMoodBitcoin };
