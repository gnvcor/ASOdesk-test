import Loadable from 'react-loadable'

export default Loadable({
    loader: () => import(/* webpackChunkName: 'popup' */ './PopupContainer'),
    loading() {
        return null
    }
});
