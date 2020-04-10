import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import TableContainer from './table/TableContainer'
import AsyncPopupContainer from './popup/AsyncPopupContainer'
import { RootState } from '../reducers/reducers'

const connector = connect(
    (state: RootState) => ({
        isPopupOpen: state.popup.isOpen
    }),
)

type PropsFromRedux = ConnectedProps<typeof connector>

const App = (props: PropsFromRedux) => {
  return (
    <>
      <TableContainer />
      {props.isPopupOpen && <AsyncPopupContainer />}
    </>
  );
}

export default connector(App)
