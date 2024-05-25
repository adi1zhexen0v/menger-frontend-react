import { useState } from "react";
import { AddStudentToOrganizationForm, AddManagerToOrganizationForm } from "@features/organization";
import { IOrganization } from "@entities/organization";
import { IUser, UserItem } from "@entities/user";
import styles from "./UserListOfOrganization.module.scss";

interface Props {
  organization: IOrganization;
}

export const UserListOfOrganization: React.FC<Props> = ({ organization }) => {
  const [students, setStudents] = useState<IUser[]>(organization.students || []);
  const [managers, setManagers] = useState<IUser[]>(organization.managers || []);

  const handleStudentAdded = (newUser: IUser) => {
    setStudents([...students, newUser]);
  };

  const handleManagerAdded = (newUser: IUser) => {
    setManagers([...managers, newUser]);
  };

  return (
    <div>
      <div className={styles.manager}>
        <div className={styles.title}>
          <h4>Менеджерлер тізімі</h4>
        </div>
        <div className={styles.list}>
          {managers.length ? (
            managers.map((manager, index) => <UserItem user={manager} num={index + 1} />)
          ) : (
            <p className={styles.message}>Әзірге менеджерлер жоқ!</p>
          )}
        </div>
        <AddManagerToOrganizationForm id={organization._id} onUserAdded={handleManagerAdded} />
      </div>
      <div>
        <div className={styles.title}>
          <h4>Студенттер тізімі</h4>
        </div>
        <div className={styles.list}>
          {students.length ? (
            students.map((student, index) => <UserItem user={student} num={index + 1} />)
          ) : (
            <p className={styles.message}>Әзірге студенттер жоқ!</p>
          )}
        </div>
        <AddStudentToOrganizationForm id={organization._id} onUserAdded={handleStudentAdded} />
      </div>
    </div>
  );
};
