import applicationModalImage from "@img/application-modal-image.svg";
import { Button, PageText, PageTitle } from "@shared/ui";
import styles from "./ApplicationModal.module.scss";
import { formatDate } from "@shared/utils";

interface Props {
  date: string;
  email: string;
}

export const ApplicationModal: React.FC<Props> = ({ date, email }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={applicationModalImage} alt="Application Modal" />
      </div>
      <div>
        <PageTitle>Біз сіздің өтінішіңізді қабыл алдық!</PageTitle>
        <PageText>
          Сіздің өтінішіңіз қарастыру кезеңінде! Сіз бізбен <b>{formatDate(date)}-де</b> Zoom
          платформасы арқылы байланысқа шыға аласыз. Қоңырауға қосылу сілтемесі <b>{email}</b>{" "}
          электронды поштасына жіберілді.
        </PageText>
        <Button title="Терезені жабу" marginTop={24} />
      </div>
    </div>
  );
};
