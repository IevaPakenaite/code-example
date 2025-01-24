import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../../containers/Sidebar/Sidebar';

import styles from './PageLayout.module.scss';

function PageLayout() {
  return (
    <div className={styles['page-layout']}>
      <Sidebar />
      <Outlet />
      <ToastContainer />
    </div>
  );
}
export default PageLayout;
