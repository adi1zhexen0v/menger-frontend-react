import { IconType } from "react-icons/lib";
import { RxDashboard } from "react-icons/rx";
import { PiListChecksBold } from "react-icons/pi";
import { UserRole } from "@shared/consts/enums";
import { DASHBOARD_APPLICATIONS_PAGE_ROUTE, DASHBOARD_MAIN_PAGE_ROUTE } from "@shared/consts/routes";

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
    link: DASHBOARD_APPLICATIONS_PAGE_ROUTE,
    title: "Өтініштер",
    icon: PiListChecksBold,
    roles: [ADMIN]
  }
]