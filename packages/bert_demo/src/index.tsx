import { Avatar } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';
import React from 'react';
import type { ConfettiButtonProps } from './interface';

const Demo = () => {
  return (
    <Avatar style={{ backgroundColor: '#00d0b6' }}>
      <IconUser />
    </Avatar>
  );
};
export default Demo;
export type { ConfettiButtonProps };
