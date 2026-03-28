import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceImacUp = themed(memo(function (props) {
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
      d: "M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13h13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 21h4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 17l-.5 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconDeviceImacUp };
