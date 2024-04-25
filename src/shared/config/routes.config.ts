import { CoursesPage } from "@pages/public/courses";
import { FaqPage } from "@pages/public/faq";
import { MainPage } from "@pages/public/main";
import { NotFoundPage } from "@pages/public/not-found";
import { COURSES_PAGE_ROUTE, FAQ_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "@shared/consts/routes";

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
    path: FAQ_PAGE_ROUTE,
    element: FaqPage
  },
  {
    path: "*",
    element: NotFoundPage
  }
];