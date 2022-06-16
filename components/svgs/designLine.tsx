import theme from "../../theme.json";

type Props = {
  color?: string;
  className?: string;
};
const DesignLine = ({ color, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="410"
    height="1029"
    viewBox="0 0 410 1029"
    id="sauce-drip-outline"
    data-shape="true"
    className={`absolute mt-20 left-[-66px] top-0 z-[-1] ${className || ""}`}
  >
    <path
      fill="none"
      stroke={color}
      strokeMiterlimit="50"
      d="M-595.702 68.801c170.37-196.112 467.886-203.922 648.382-23.426 118.036 118.036 155.527 286.059 112.51 435.858-4.761 16.58-12.01 32.283-19.316 47.909a138.955 138.955 0 00-9.03 25.534c-11.945 47.534.67 99.913 37.845 137.087 24.143 24.144 54.677 37.886 86.17 41.312 5.473.626 11.028.919 16.625.918 32.33 3.426 63.742 17.627 88.47 42.354 61.444 61.445 57.39 163.708-12.16 219.767-51.833 41.779-127.42 43.175-180.571 3.087-34.726-26.19-54.364-63.667-58.474-102.473 0-5.596-.293-11.151-.92-16.624-3.425-31.494-17.166-62.028-41.31-86.172-37.174-37.174-89.555-49.788-137.088-37.841a140.596 140.596 0 00-25.545 9.04c-15.375 7.181-30.8 14.359-47.102 19.074-158.488 45.834-337.525 1.47-456.231-133.131-145.451-164.927-146.471-416.267-2.255-582.273zm477.57 432.312c78.526-78.524 78.527-206.402 0-284.928-78.582-78.583-206.402-78.525-284.927 0-78.583 78.583-78.583 206.345 0 284.928 78.526 78.526 206.345 78.583 284.928 0z"
    />
  </svg>
);
DesignLine.defaultProps = {
  color: theme?.colors?.primary?.[500] || "#00BFA6",
};
export default DesignLine;
