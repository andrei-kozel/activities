import type { IActivity } from "@/types/Activity.interface";
import axios from "axios";

export const createActivity = async (activity: IActivity) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/activities/",
      activity
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
