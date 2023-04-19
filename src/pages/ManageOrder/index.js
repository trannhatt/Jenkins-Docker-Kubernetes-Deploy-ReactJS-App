import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';


import styles from './manageorder.module.scss';
import SideBar from '../../components/SideBar';
import Title from './Tittle';
import OrderList from './OrderList';
import Delivery from './Delivery';
import WaitingVerify from './WaitingVerify';
import Deliveried from './Deliveried';
import Cancelled from './Cancelled';

function Manageorder({ children }) {

  return (
    <div class={styles.wrapper}>
      <Header />
      <div class={styles.container}>
        <Title />
        <div class={styles.content}>
          <SideBar />

          {/* link route từ sidebar tại đây */}
          {children}

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Manageorder;