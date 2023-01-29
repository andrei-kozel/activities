import axios from "axios";

export const deleteActivity = async (id: string) => {
  try {
    await axios.delete(`http://localhost:5000/api/activities/${id}`);
  } catch (err) {
    console.log(err);
  }
};
