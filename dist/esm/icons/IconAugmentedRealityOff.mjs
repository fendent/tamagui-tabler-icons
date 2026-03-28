import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAugmentedRealityOff = themed(memo(function (props) {
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
      d: "M4 8v-2c0 -.557 .228 -1.061 .595 -1.424",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16v2a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4h2a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h2c.558 0 1.062 -.228 1.425 -.596",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10v4.5l4 2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconAugmentedRealityOff };
