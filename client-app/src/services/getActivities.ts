import type { IActivity } from "@/types/Activity.interface";
import axios from "axios";

export const getActivities = async (): Promise<IActivity[]> =>
  axios
    .get<IActivity[]>("http://localhost:5000/api/activities")
    .then((response) => response.data);
