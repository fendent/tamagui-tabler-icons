import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunElectricity = themed(memo(function (props) {
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
      d: "M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.6 5.6l.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.3 17.7l-.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 7l-3 5h4l-3 5",
      stroke: color
    })]
  });
}));
export { IconSunElectricity };
