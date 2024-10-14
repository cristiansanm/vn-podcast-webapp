import { FC } from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  size?: number;
  hasBorder?: boolean;
  borderColor?: string;
  borderWidth?: string;
}

export const Divider: FC<DividerProps> = ({
  orientation = 'horizontal',
  size = 1,
  hasBorder = false,
  borderColor = 'black',
  borderWidth = '1px',
}) => {
  const dividerStyle = {
    width: orientation === 'horizontal' ? '100%' : `${size}rem`,
    height: orientation === 'horizontal' ? `${size}rem` : '100%',
    borderBottom:
      orientation === 'horizontal' && hasBorder ? `${borderWidth} solid ${borderColor}` : 'none',
    borderRight:
      orientation === 'vertical' && hasBorder ? `${borderWidth} solid ${borderColor}` : 'none',
  };

  return <div style={dividerStyle} />;
};
