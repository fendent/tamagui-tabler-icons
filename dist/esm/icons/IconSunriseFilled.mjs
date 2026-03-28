import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunriseFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M4 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12a5 5 0 0 1 5 5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1a5 5 0 0 1 5 -5"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.307 9.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414"
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.107 9.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.707 2.293l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v3.585a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-3.586l-1.293 1.293a1 1 0 0 1 -1.414 -1.414l2.958 -2.96a1 1 0 0 1 .15 -.135l.127 -.08l.068 -.033l.11 -.041l.12 -.029c.3 -.055 .627 .024 .881 .278"
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002"
    })]
  });
}));
export { IconSunriseFilled };
