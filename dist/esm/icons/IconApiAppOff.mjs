import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconApiAppOff = themed(memo(function (props) {
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
      d: "M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconApiAppOff };
