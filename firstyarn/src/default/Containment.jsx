import React from 'react';

const Card = ({title, backgroundColor, children}) => {
  return (
    <div style={{maring:8, padding:8, borderRadius:8, boxShadow: "0px 0px 4px grey", backgroundColor: backgroundColor || 'white' }}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

const Containment = () => {
  return (
    <Card title="MagoLee" backgroundColor="#4ea04e">
      <p>안녕하세요 Containment</p>
      <p>component</p>
    </Card>
  )
}

export default Containment;
