import { CSSProperties } from 'react';

/**
 * @title bert_arco_react
 */
export interface bert_arco_reactProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @zh 组件尺寸
   * @en Component Size
   * @defaultValue default
   * @version 1.1.0
   */
  size?: 'small' | 'default' | 'large';
}
