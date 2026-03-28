import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhoneCallingFilled = themed(memo(function (props) {
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
      d: "M9.928 3.629l2 5a1 1 0 0 1 -.414 1.228l-1.67 1.003a9.9 9.9 0 0 0 3.296 3.297l1.003 -1.671a1 1 0 0 1 1.228 -.414l5 2a1 1 0 0 1 .629 .928v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 3 -3h4a1 1 0 0 1 .928 .629"
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 2 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 7v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 2 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 7v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 2 0"
    })]
  });
}));
export { IconPhoneCallingFilled };
