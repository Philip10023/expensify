// Hgiher Order Component (HOC) - component that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = () => (
  <div>
    <h1> info</h1>
    <p>the info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrapperComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info please dont share</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details", document.getElementById('app'))
