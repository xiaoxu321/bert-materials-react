import React, { useState } from 'react';
import { Button } from '@arco-design/web-react';
// import { IconThumbUp } from '@arco-design/web-react/icon';
import BertDemo from '@bert.xu/bert_demo_react';

// const wrapperStyle = {
//   height: 300,
//   paddingBottom: 20,
//   display: 'flex',
//   alignItems: 'flex-end',
//   justifyContent: 'center',
// };

export default function Demo() {
  // const [awesome, setAwesome] = useState(false);
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <BertDemo />
      <Button>bert_demo_button</Button>
    </>
    // <div style={wrapperStyle}>
    //   <BertDemo disabled={awesome}>
    //     <Button
    //       type={!awesome ? 'outline' : 'primary'}
    //       shape="circle"
    //       size="large"
    //       loading={loading}
    //       icon={<IconThumbUp style={{ fontSize: 18, verticalAlign: -4 }} />}
    //       onClick={() => {
    //         if (!awesome) {
    //           setLoading(true);
    //           return new Promise((resolve) => {
    //             setTimeout(() => {
    //               setLoading(false);
    //               setAwesome(true);
    //               resolve();
    //             }, 1500);
    //           });
    //         }
    //         setAwesome(false);
    //       }}
    //     />
    //   </BertDemo>
    // </div>
  );
}
