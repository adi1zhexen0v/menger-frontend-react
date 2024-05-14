import { useState } from "react";
import { useAddCourseToCart, useAuth } from "@entities/user";
import { useAppSelector } from "@shared/lib/hooks";
import { Button, Loader, Modal, Toast } from "@shared/ui";
import { CartModal } from "../modal";

interface Props {
  courseId: string;
}

export const CartButton: React.FC<Props> = ({ courseId }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useAddCourseToCart();
  const user = useAppSelector((state) => state.user.user);
  const isAuth = useAuth();

  const userHasCourseInCart: boolean = user?.cart.some((course) => course._id === courseId)!;
  const userPurchasedCourse: boolean = user?.courses.some((course) => course._id === courseId)!;
  const buttonTitle: string = userHasCourseInCart
    ? "Бұл курс себетте жатыр"
    : userPurchasedCourse
    ? "Бұл курс сатып алынған"
    : "Курсты сатып алу";

  const handleClickAddCourse = () => {
    mutate(courseId, {
      onSuccess: () => {
        setToastIsOpen(true);
      }
    });
  };

  const handleClickOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleClickCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal func={handleClickCloseModal} paddingHorizontal={72} paddingVertical={56}>
          <CartModal />
        </Modal>
      )}
      {isLoading && <Loader isFullPage={true} />}
      <Button
        title={buttonTitle}
        marginTop={24}
        disabled={userHasCourseInCart || userPurchasedCourse}
        func={isAuth ? handleClickAddCourse : handleClickOpenModal}
      />
      {toastIsOpen && (
        <Toast
          title="Курс себетке сәтті қосылды"
          text={`"${
            user?.cart.find((item) => item._id === courseId)?.title
          }" курсы сіздің себетіңізге қосылды`}
        />
      )}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Курсты себетке қосу кезінде қате пайда болды"
        />
      )}
    </>
  );
};
