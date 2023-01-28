import type { IActivity } from "@/types/Activity.interface";
import axios from "axios";

export const updateActivity = async (
  activity: Partial<IActivity>,
  id: string
) => {
  try {
    await axios.put<IActivity>(
      `http://localhost:5000/api/activities/${id}`,
      activity
    );
    return "Activity updated successfully";
  } catch (error) {
    console.log(error);
  }
};
