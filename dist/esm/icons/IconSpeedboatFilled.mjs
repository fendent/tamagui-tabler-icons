import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconSpeedboatFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M14 7a1 1 0 0 1 .832 .445l1.702 2.555h5.466a1 1 0 0 1 .833 1.554l-3.1 4.66a4 4 0 0 1 -3.333 1.786h-14.4a1 1 0 0 1 -.936 -1.351l1.5 -4a1 1 0 0 1 .936 -.649h1.756l.9 -3h-.156a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1zm-6.657 5h1.887c.383 0 .762 -.074 1.12 -.219l3.557 -1.418q .186 -.075 .377 -.135l-.82 -1.228h-5.22z"
    })
  });
}));
export { IconSpeedboatFilled };
