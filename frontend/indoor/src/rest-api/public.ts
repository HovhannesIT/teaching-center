import axios from "axios";

export const professionsList = async () => {
  const list = await axios('/professions');
  
  return list.data;
}