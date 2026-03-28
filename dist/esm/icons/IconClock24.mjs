import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconClock24 = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15v2a1 1 0 0 0 1 1h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15v6",
      stroke: color
    })]
  });
}));
export { IconClock24 };
