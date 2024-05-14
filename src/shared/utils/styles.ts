import { ACCOUNT_ACTIVATE_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "@shared/consts/routes";

const routes: string[] = [LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, ACCOUNT_ACTIVATE_PAGE_ROUTE];

export const changeBackgroundOfBody = (pathname: string): void => {
  const shouldChangeBackground: boolean = !!routes.find(route => route === pathname);
  document.body.className = shouldChangeBackground ? "auth-bg" : "";
}