// YOUR DEPLOYED API BASE URL
const URL = "https://cheeseapp-django-backend.onrender.com";

//indexLoader
export const indexLoader = async () => {
  const response = await fetch(URL + "/cheese/");
  const cheeses = await response.json();
  return cheeses;
};

//showLoader
export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/cheese/${params.id}/`);
  const cheese = await response.json();
  return cheese;
};