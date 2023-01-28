import type { IActivity } from "@/types/Activity.interface";
import axios from "axios";

export const getActivities = async (): Promise<IActivity[]> => {
  const response = await axios.get<IActivity[]>(
    "http://localhost:5000/api/activities"
  );
  return response.data;
};
