import Home from '../containers/home';
import Login from '../containers/login';
import Course from '../containers/course';
import Notice from '../containers/notice';
import NoticeDetail from '../containers/notice/detail';
import Book from '../containers/book';
const routes = [
  {
    path:'/',
    component: Home,
    exact: true,
  }, {
    path:'/home',
    component: Home,
    exact: true,
  }, {
    path:'/login',
    component: Login,
    exact: true,
  }, {
    path:'/course',
    component: Course,
    exact: true,
  }, {
    path:'/notice',
    component: Notice,
    exact: true,
  }, {
    path:'/notice/detail',
    component: NoticeDetail,
    exact: false,
  }, {
    path:'/book',
    component: Book,
    exact: true,
  },
]
export default routes;