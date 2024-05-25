export { type IOrganization, type IUpdateOrganizationRequest, type IAddUserToOrganizationRequest } from "./model";
export { useOrganizations, useOrganizationBySlug, useUpdateOrganization, useAddStudentToOrganization, useAddManagerToOrganization } from "./lib/hooks";
export { OrganizationCard } from "./ui";