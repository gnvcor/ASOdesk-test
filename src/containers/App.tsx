import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import TableContainer from './table/TableContainer'
import AsyncPopupContainer from './popup/AsyncPopupContainer'
import { RootState } from '../reducers/reducers'
import LayoutComponent from '../core/components/layout/LayoutComponent'

const connector = connect(
    (state: RootState) => ({
        isPopupOpen: state.popup.isOpen
    }),
)

type PropsFromRedux = ConnectedProps<typeof connector>

const AsideLayout = () => <div>AsideLayout</div>

const App = (props: PropsFromRedux) => {
  return (
    <LayoutComponent Aside={<AsideLayout />}>
      <TableContainer />
      {props.isPopupOpen && <AsyncPopupContainer />}
    </LayoutComponent>
  );
}

export default connector(App)
