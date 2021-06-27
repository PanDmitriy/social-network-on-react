import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = ({store, children}) => (
  <StoreContext.Provider value={store}  >
    {children}
  </StoreContext.Provider>
)

export default StoreContext;

