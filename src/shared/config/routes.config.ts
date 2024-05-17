import { CartPage } from "@pages/public/cart";
import { CoursesPage, CoursePage } from "@pages/public/courses";
import { FaqPage } from "@pages/public/faq";
import { RegisterPage, LoginPage, AccountActivatePage } from "@pages/public/auth";
import { MainPage } from "@pages/public/main";
import { NotFoundPage } from "@pages/public/not-found";
import { DashboardMainPage } from "@pages/private/main";
import { ACCOUNT_ACTIVATE_PAGE_ROUTE, CART_PAGE_ROUTE, COURSES_PAGE_ROUTE, COURSE_PAGE_ROUTE, DASHBOARD_APPLICATIONS_PAGE_ROUTE, DASHBOARD_MAIN_PAGE_ROUTE, FAQ_PAGE_ROUTE, LOGIN_PAGE_ROUTE, MAIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "@shared/consts/routes";
import { DashboardApplicationsPage } from "@pages/private/applications";

interface IAppRoute {
  path: string,
  element: React.FC,
  authOnly?: boolean
}

export const routes: IAppRoute[] = [
  {
    path: MAIN_PAGE_ROUTE,
    element: MainPage
  },
  {
    path: COURSES_PAGE_ROUTE,
    element: CoursesPage
  },
  {
    path: COURSE_PAGE_ROUTE,
    element: CoursePage
  },
  {
    path: FAQ_PAGE_ROUTE,
    element: FaqPage
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage
  },
  {
    path: REGISTER_PAGE_ROUTE,
    element: RegisterPage
  },
  {
    path: ACCOUNT_ACTIVATE_PAGE_ROUTE,
    element: AccountActivatePage
  },
  {
    path: CART_PAGE_ROUTE,
    element: CartPage,
    authOnly: true
  },
  {
    path: DASHBOARD_MAIN_PAGE_ROUTE,
    element: DashboardMainPage,
    authOnly: true
  },
  {
    path: DASHBOARD_APPLICATIONS_PAGE_ROUTE,
    element: DashboardApplicationsPage,
    authOnly: true
  },
  {
    path: "*",
    element: NotFoundPage
  }
];