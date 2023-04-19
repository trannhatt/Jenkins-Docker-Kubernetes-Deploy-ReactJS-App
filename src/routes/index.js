// Pages
import Home from '~/pages/Welcomepage'
import Login from '~/pages/Login'
import Info from '~/pages/Infomation'
import ManageMenu from '~/pages/ManageOrder/ManageMenu/Content'
import EditMenu from '~/pages/ManageOrder/ManageMenu/CreateNewFood'
import ChatBox from '~/pages/ManageOrder/ManageMenu/Chat'
import ManageOrder from '~/pages/ManageOrder'
import OrderList from '~/pages/ManageOrder/OrderList'
import WaitingVerify from '~/pages/ManageOrder/WaitingVerify'
import Delivery from '~/pages/ManageOrder/Delivery'
import Deliveried from '~/pages/ManageOrder/Deliveried'
import Cancelled from '~/pages/ManageOrder/Cancelled'
import Order from '~/pages/Orderfood'
import Payment from '~/pages/Payment'
import Feedback from '~/pages/Feedback'
import { OnlyHeader } from '~/components/Layout';

// Không cần đăng nhập vẫn vào được
const publicRoutes = [
    // http://localhost:3000
    {
        path: '/',
        component: Home,
        layout: null,
    },
    // http://localhost:3000/login
    {
        path: '/login',
        component: Login,
        layout: null,
    },
    // http://localhost:3000/infomation
    {
        path: '/infomation',
        component: Info,
        layout: null
    },
    // http://localhost:3000/order
    {
        path: '/order',
        component: Order,
    },
    // http://localhost:3000/test
    {
        path: '/managemenu',
        component: ManageMenu,
        layout: ManageOrder
    },
    {
        path: '/managemenu/editmenu',
        component: EditMenu,
        layout: ManageOrder
    },
    {
        path: '/managemenu/chatbox',
        component: ChatBox,
        layout: ManageOrder
    },
    {
        path: '/manageorder',
        component: ManageOrder,
        layout: null
    },

    {
        path: '/manageorder/orderlist',
        component: OrderList,
        layout: ManageOrder
    },
    {
        path: '/manageorder/waitingverify',
        component: WaitingVerify,
        layout: ManageOrder
    },
    {
        path: '/manageorder/delivery',
        component: Delivery,
        layout: ManageOrder
    },
    {
        path: '/manageorder/deliveried',
        component: Deliveried,
        layout: ManageOrder
    },
    {
        path: '/manageorder/cancelled',
        component: Cancelled,
        layout: ManageOrder
    },

    // http://localhost:3000/payment
    {
        path: '/payment',
        component: Payment,
    },
    // http://localhost:3000/payment/feedback
    {
        path: '/payment/feedback',
        component: Feedback,
    }
];

// Sau khi đăng nhập mới vào được
const privateRoutes = [

];

export { publicRoutes, privateRoutes };
