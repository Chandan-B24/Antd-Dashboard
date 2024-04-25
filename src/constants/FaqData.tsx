import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: 'What about Casual Leave Policy ?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'When we can take Emergency Leave ?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];