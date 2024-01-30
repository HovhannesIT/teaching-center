import axios from "axios";
import { SignInRequestI, SignUpRequestI } from "./types";

export const professionsList: () => Promise<{id: number, name: string, description: string}[]> = async () => {
  const list = await axios('/professions');
  return list.data;
}

export const communcationTypesList: () => Promise<{id: number, name: string}[]> = async () => {
  const list = await axios('/communicationTypes');
  return list.data;
}

export const signUp = async (body: SignUpRequestI) => {
  return await axios.post('/auth/sign-up', body);
}

export const signIn = async (body: SignInRequestI) => {
  return await axios.post('/auth/sign-in', body);
}

export const suggestProfession = async (prof: string) => {
  return await axios.post('/suggest-profession', { name: prof })
}

export const suggestImprovement = async (improvement: string) => {
  return await axios.post('/suggest-improvement', { description: improvement })
}