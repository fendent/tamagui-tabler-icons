import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAsteriskSimple = themed(memo(function (props) {
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
      d: "M12 12v-9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l-9 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l9 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l6 8.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l-6 8.5",
      stroke: color
    })]
  });
}));
export { IconAsteriskSimple };
