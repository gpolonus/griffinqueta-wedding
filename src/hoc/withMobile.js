
import React from 'react';


export default (Comp) => {
  return (props) => <Comp isMobile={window.innerWidth < 1024} {...props} />
}
