import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlant2 = themed(memo(function (props) {
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
      d: "M2 9a10 10 0 1 0 20 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19a10 10 0 0 1 10 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 9a10 10 0 0 1 10 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4a9.7 9.7 0 0 1 2.99 7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5",
      stroke: color
    })]
  });
}));
export { IconPlant2 };
