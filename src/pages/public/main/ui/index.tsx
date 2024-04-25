import { CoursesSection, ForWhomSection, FormSection, HomeSection } from "@widgets/main";
import { useLatestCourses } from "@entities/course";
import { Loader } from "@shared/ui";

export const MainPage: React.FC = () => {
  const { data, isLoading } = useLatestCourses();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HomeSection />
      <CoursesSection courses={data!} />
      <ForWhomSection />
      <FormSection />
    </>
  );
};
