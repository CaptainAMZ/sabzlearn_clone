// modules import
import Header from "./components/modules/header/Header";
import Topbar from "./components/modules/topbar/Topbar";
import Navbar from "./components/modules/navbar/Navbar";
import SectionHeader from "./components/modules/SectionHeader/SectionHeader";
import CourseBox from "./components/modules/CourseBox/CourseBox";
import AboutUsBox from "./components/modules/AboutUsBox/AboutUsBox";
import CountUp from "./components/modules/CountUp/CountUp";
import ArticleBox from "./components/modules/ArticleBox/ArticleBox";
import Footer from "./components/modules/Footer/Footer";
import FooterItem from "./components/modules/FooterItem/FooterItem";
import Pagination from "./components/modules/Pagination/Pagination";
import Breadcrumb from "./components/modules/Breadcrumb/Breadcrumb";
import CourseDetailBox from "./components/modules/CourseDetailBox/CourseDetailBox";
import CommentsTextArea from "./components/modules/CommentTextArea/CommentTextArea";
import CircleSpinner from "./components/modules/CircleSpinner/CircleSpinner";
import BoxLoader from "./components/modules/BoxLoader/BoxLoader";
import Input from "./components/modules/Form/Input/Input";
import Button from "./components/modules/Form/Button/Button";
import Editor from "./components/modules/Form/Editor/Editor";
import SideBar from "./components/modules/AdminPanel/SideBar/SideBar";
import TopBar from "./components/modules/AdminPanel/TopBar/TopBar";
import DataTable from "./components/modules/AdminPanel/DataTable/DataTable";
import PAdminItem from "./components/modules/AdminPanel/PAdminItem/PAdminItem";
import IndexBox from "./components/modules/UserPanel/IndexBox/IndexBox";
import UserPanelSideBar from "./components/modules/UserPanel/SideBar/SideBar";
import Ticket from "./components/modules/UserPanel/Ticket/Ticket";
import PAdminPrivate from "./components/modules/Privates/PAdminPrivate";

// modules export
export {
  Header,
  Topbar,
  Navbar,
  SectionHeader,
  CourseBox,
  AboutUsBox,
  CountUp,
  ArticleBox,
  Footer,
  FooterItem,
  Pagination,
  Breadcrumb,
  CourseDetailBox,
  CommentsTextArea,
  CircleSpinner,
  BoxLoader,
  Input,
  Button,
  SideBar,
  TopBar,
  DataTable,
  Editor,
  IndexBox,
  UserPanelSideBar,
  Ticket,
  PAdminItem,
  PAdminPrivate,
};

// templates import
import Landing from "./components/templates/Landing/Landing";
import LatestCourse from "./components/templates/LatestCourse/LatestCourse";
import AboutUs from "./components/templates/AboutUs/AboutUs";
import PopularCourses from "./components/templates/PopularCourses/PopularCourses";
import PreSellCourses from "./components/templates/PreSellCourses/PreSellCourses";
import LatestArticles from "./components/templates/LatestArticles/LatestArticles";

// templates exports
export {
  Landing,
  LatestCourse,
  AboutUs,
  PopularCourses,
  PreSellCourses,
  LatestArticles,
};

// pages imports
import Home from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Category from "./pages/Category/Category";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AllArticles from "./pages/AllArticles/AllArticles";
import ContactUs from "./pages/ContactUs/ContactUs";
import Search from "./pages/Search/Search";
import SessionInfo from "./pages/SessionInfo/SessionInfo";
import AdminPanel from "./pages/AdminPanel/Index";
import Users from "./pages/AdminPanel/Users/Users";
import P_Courses from "./pages/AdminPanel/Courses/Courses";
import Menus from "./pages/AdminPanel/Menus/Menus";
import Articles from "./pages/AdminPanel/Articles/Articles";
import Draft from "./pages/AdminPanel/Articles/Draft";
import AdminCategory from "./pages/AdminPanel/Category/Category";
import AdminContact from "./pages/AdminPanel/Contact/Contact";
import Sessions from "./pages/AdminPanel/Sessions/Sessions";
import Comments from "./pages/AdminPanel/Comments/Comments";
import Offs from "./pages/AdminPanel/Offs/Offs";
import Index from "./pages/AdminPanel/Index/Index";
import UserPanelInnerIndex from "./pages/UserPanel/Index/Index";
import EditAccount from "./pages/UserPanel/EditAccount/EditAccount";
import UserPanelIndex from "./pages/UserPanel/Index";
import UserPanelCourses from "./pages/UserPanel/Courses/Courses";
import Orders from "./pages/UserPanel/Orders/Orders";
import SendTicket from "./pages/UserPanel/Tickets/SendTicket";
import TicketAnswer from "./pages/UserPanel/Tickets/TicketAnswer";
import Tickets from "./pages/UserPanel/Tickets/Tickets";
import AdminTickets from "./pages/AdminPanel/Tickets/Tickets";
import Discounts from "./pages/AdminPanel/Discounts/Discounts";

// pages export

export {
  Home,
  CourseInfo,
  ArticleInfo,
  Category,
  Courses,
  Login,
  Register,
  AllArticles,
  ContactUs,
  Search,
  AdminPanel,
  Users,
  P_Courses,
  Menus,
  Articles,
  AdminCategory,
  AdminContact,
  Sessions,
  SessionInfo,
  Comments,
  Offs,
  Index,
  Draft,
  UserPanelIndex,
  UserPanelCourses,
  EditAccount,
  UserPanelInnerIndex,
  Orders,
  SendTicket,
  TicketAnswer,
  Tickets,
  AdminTickets,
  Discounts,
};

// hooks import
import { useForm } from "./hooks/useFrom/useForm";

// hooks export
export { useForm };

// validator imports
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "./validators/Rules";
import validator from "./validators/Validator";
import { emailTest } from "./validators/Regex";

// validator exports

export {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  validator,
  emailTest,
};

// Context Import

import AuthContext from "./context/AuthContext";

// Context Export

export { AuthContext };
