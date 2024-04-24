import { CoursesPage } from "@pages/public/courses";
import { MainPage } from "@pages/public/main";
import { COURSES_PAGE, MAIN_PAGE } from "@shared/consts/routes";

interface IAppRoute {
  path: string,
  element: React.FC,
  authOnly?: boolean
}

export const routes: IAppRoute[] = [
  {
    path: MAIN_PAGE,
    element: MainPage
  },
  {
    path: COURSES_PAGE,
    element: CoursesPage,
    authOnly: true
  }
];