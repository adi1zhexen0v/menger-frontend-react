import { IconType } from "react-icons/lib";
import { RxDashboard } from "react-icons/rx";
import { PiListChecksBold } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { FaBookBookmark } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
import { UserRole } from "@shared/consts/enums";
import { DASHBOARD_APPLICATIONS_PAGE_ROUTE, DASHBOARD_COURSES_PAGE_ROUTE, DASHBOARD_MAIN_PAGE_ROUTE, DASHBOARD_MY_COURSES_PAGE_ROUTE, DASHBOARD_ORGANIZATIONS_PAGE_ROUTE, DASHBOARD_WORDS_PAGE_ROUTE } from "@shared/consts/routes";

interface ISidebarLink {
  link: string;
  title: string;
  icon: IconType;
  roles: UserRole[];
}

const { STUDENT, MANAGER, ADMIN } = UserRole;

export const sidebarLinks: ISidebarLink[] = [
  {
    link: DASHBOARD_MAIN_PAGE_ROUTE,
    title: "Бастысы",
    icon: RxDashboard,
    roles: [STUDENT, MANAGER, ADMIN]
  },
  {
    link: DASHBOARD_COURSES_PAGE_ROUTE,
    title: "Курстар",
    icon: CiFolderOn,
    roles: [ADMIN, MANAGER]
  },
  {
    link: DASHBOARD_MY_COURSES_PAGE_ROUTE,
    title: "Курстар",
    icon: CiFolderOn,
    roles: [STUDENT]
  },
  {
    link: DASHBOARD_WORDS_PAGE_ROUTE,
    title: "Сөздік",
    icon: FaBookBookmark,
    roles: [ADMIN, MANAGER]
  },
  {
    link: DASHBOARD_APPLICATIONS_PAGE_ROUTE,
    title: "Өтініштер",
    icon: PiListChecksBold,
    roles: [ADMIN]
  },
  {
    link: DASHBOARD_ORGANIZATIONS_PAGE_ROUTE,
    title: "Ұйымдар",
    icon: GoOrganization,
    roles: [ADMIN, MANAGER]
  }
];