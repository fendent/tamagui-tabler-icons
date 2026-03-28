import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconToolsKitchenOff = themed(memo(function (props) {
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
      d: "M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 18h2v3h-2v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15v1m0 4v1h-1v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconToolsKitchenOff };
