import { CartPage } from "@pages/public/cart";
import { CoursePage } from "@pages/public/course";
import { CoursesPage } from "@pages/public/courses";
import { FaqPage } from "@pages/public/faq";
import { LoginPage } from "@pages/public/login";
import { MainPage } from "@pages/public/main";
import { NotFoundPage } from "@pages/public/not-found";
import { CART_PAGE_ROUTE, COURSES_PAGE_ROUTE, COURSE_PAGE_ROUTE, FAQ_PAGE_ROUTE, LOGIN_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "@shared/consts/routes";

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
    path: CART_PAGE_ROUTE,
    element: CartPage,
    authOnly: true
  },
  {
    path: "*",
    element: NotFoundPage
  }
];