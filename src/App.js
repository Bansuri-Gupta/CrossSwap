// import React from 'react';
// import { LiFiWidget, WidgetConfig } from '@lifi/widget';

// // Variant 1: Using containerStyle
// const widgetConfig1: WidgetConfig = {
//   containerStyle: {
//     border: '1px solid rgb(234, 234, 234)',
//     borderRadius: '16px',
//     padding: '20px',
//     width: '600px',
//     margin: '20px auto',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   },
// };

// const WidgetPage1 = () => {
//   return (
//     <LiFiWidget integrator="Your dApp/company name" config={widgetConfig1} />
//   );
// };

// // Variant 2: Using variant
// const widgetConfig2: WidgetConfig = {
//   variant: 'expandable', // It can be either 'default', 'expandable', or 'drawer'
// };

// const WidgetPage2 = () => {
//   return (
//     <LiFiWidget integrator="Your dApp/company name" config={widgetConfig2} />
//   );
// };

// function App() {
//   const appStyle = {
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const headingStyle = {
//     color: '#007BFF',
//   };

//   const paragraphStyle = {
//     color: '#333',
//     fontSize: '18px',
//   };

//   return (
//     <div style={appStyle}>
//       <h1 style={headingStyle}>Cross Chain Swapping Swapping</h1>
//       <WidgetPage1 />
//       <p></p>
//       <p></p>
//       <p style={paragraphStyle}>Try to Hover on the Chain box or hit on search to find the Chain Expelicitly</p>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';

// Variant 1: Using containerStyle
const widgetConfig1: WidgetConfig = {
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
    padding: '20px',
    width: '500px', // Adjust the width as needed
    margin: '20px auto', // Center the widget
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a shadow
    background: 'white', // Set the background color
  },
};

const WidgetPage1 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Made by Bansuri Gupta, powered by Li.fi</h3>
      <LiFiWidget integrator="Your dApp/company name" config={widgetConfig1} />
    </div>
  );
};

// Variant 2: Using variant
const widgetConfig2: WidgetConfig = {
  variant: 'expandable', // It can be either 'default', 'expandable', or 'drawer'
};

const WidgetPage2 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Made by Bansuri Gupta, powered by Li.fi</h3>
      <LiFiWidget integrator="Your dApp/company name" config={widgetConfig2} />
    </div>
  );
};

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px auto', maxWidth: '800px' }}>
      <h1 style={{ textAlign: 'center' }}>Cross Chain Swapping Swapping</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Try to Hover on the Chain box or click on search to find the Chain Explicitly
      </p>
      <WidgetPage1 />
    </div>
  );
}

export default App;
