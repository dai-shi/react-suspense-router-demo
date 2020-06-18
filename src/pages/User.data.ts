import { Match } from "react-suspense-router";

export type UserData = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
};

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const fetchUserData = async (match: Match) => {
  const userId = match.params.uid;
  if (Number(userId) % 2 === 0) {
    await sleep(3000);
  } else {
    await sleep(1000);
  }
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const data = await response.json();
  return data as UserData;
};

export default fetchUserData;
