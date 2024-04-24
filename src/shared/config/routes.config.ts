import { CoursesPage } from "@pages/public/courses";
import { MainPage } from "@pages/public/main";
import { COURSES_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "@shared/consts/routes";

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
    element: CoursesPage,
    authOnly: true
  }
];