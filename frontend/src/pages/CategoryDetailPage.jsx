import React from "react";
import { useParams } from "react-router";
import TeamMeeting from "./categoryDetail/TeamMeeting";
import WeeklyPaper from "./categoryDetail/WeeklyPaper";
import Mentoring from "./categoryDetail/Mentoring";
import SprintMission from "./categoryDetail/SprintMission";
import Etc from "./categoryDetail/Etc";

const categoryComponent = {
  teamMeeting: TeamMeeting,
  weeklyPaper: WeeklyPaper,
  mentoring: Mentoring,
  sprintMission: SprintMission,
  etc: Etc,
};

const CategoryDetailPage = () => {
  const { category } = useParams();
  const SelectedCategoryComponent = categoryComponent[category];
  return SelectedCategoryComponent && <SelectedCategoryComponent />;
};

export default CategoryDetailPage;
