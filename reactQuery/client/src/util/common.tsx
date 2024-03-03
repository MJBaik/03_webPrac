import defaultProf from "../assets/images/defaultProf.jpg";

const server = import.meta.env.VITE_SERVER_URL;

export const getFullUrl = (url: string | null) => {
  return url ? `${server}/${url}` : defaultProf;
};
