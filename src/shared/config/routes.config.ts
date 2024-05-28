import { CartPage } from "@pages/public/cart";
import { CoursesPage, CoursePage } from "@pages/public/courses";
import { FaqPage } from "@pages/public/faq";
import { RegisterPage, LoginPage, AccountActivatePage } from "@pages/public/auth";
import { MainPage } from "@pages/public/main";
import { NotFoundPage } from "@pages/public/not-found";
import { DashboardMainPage } from "@pages/private/main";
import { DashboardApplicationsPage } from "@pages/private/applications";
import { DashboardOrganizationsPage, DashboardEditOrganizationPage } from "@pages/private/organizations";
import { DashboardWordsPage, DashboardAddWordPage } from "@pages/private/words";
import { DashboardCoursesPage, DashboardCreateCoursePage, DashboardEditCoursePage } from "@pages/private/courses";
import { ACCOUNT_ACTIVATE_PAGE_ROUTE, CART_PAGE_ROUTE, COURSES_PAGE_ROUTE, COURSE_PAGE_ROUTE, DASHBOARD_ADD_WORD_PAGE_ROUTE, DASHBOARD_APPLICATIONS_PAGE_ROUTE, DASHBOARD_COURSES_PAGE_ROUTE, DASHBOARD_CREATE_COURSE_PAGE_ROUTE, DASHBOARD_EDIT_COURSE_PAGE_ROUTE, DASHBOARD_EDIT_ORGANIZATION_PAGE_ROUTE, DASHBOARD_MAIN_PAGE_ROUTE, DASHBOARD_ORGANIZATIONS_PAGE_ROUTE, DASHBOARD_WORDS_PAGE_ROUTE, FAQ_PAGE_ROUTE, LOGIN_PAGE_ROUTE, MAIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "@shared/consts/routes";

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
    path: DASHBOARD_ORGANIZATIONS_PAGE_ROUTE,
    element: DashboardOrganizationsPage,
    authOnly: true
  },
  {
    path: DASHBOARD_EDIT_ORGANIZATION_PAGE_ROUTE,
    element: DashboardEditOrganizationPage,
    authOnly: true
  },
  {
    path: DASHBOARD_WORDS_PAGE_ROUTE,
    element: DashboardWordsPage,
    authOnly: true
  },
  {
    path: DASHBOARD_ADD_WORD_PAGE_ROUTE,
    element: DashboardAddWordPage,
    authOnly: true
  },
  {
    path: DASHBOARD_COURSES_PAGE_ROUTE,
    element: DashboardCoursesPage,
    authOnly: true
  },
  {
    path: DASHBOARD_CREATE_COURSE_PAGE_ROUTE,
    element: DashboardCreateCoursePage,
    authOnly: true
  },
  {
    path: DASHBOARD_EDIT_COURSE_PAGE_ROUTE,
    element: DashboardEditCoursePage,
    authOnly: true
  },
  {
    path: "*",
    element: NotFoundPage
  }
];