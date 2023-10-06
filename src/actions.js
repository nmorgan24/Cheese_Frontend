import { redirect } from "react-router-dom";

// YOUR DEPLOYED API BASE URL
const URL = "https://cheeseapp-django-backend.onrender.com";

//createAction
export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newCheese = {
    name: formData.get("name"),
    origin_country: formData.get("origin_country"),
    type: formData.get("type"),
  };

  await fetch(URL + "/cheese/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCheese),
  });

  return redirect("/");
};

//updateAction
export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const id = params.id;

  const updatedCheese = {
    name: formData.get("name"),
    origin_country: formData.get("origin_country"),
    type: formData.get("type"),
  };

  await fetch(URL + `/cheese/${id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCheese),
  });

  return redirect(`/cheese/${id}`);
};

//deleteAction
export const deleteAction = async ({ params }) => {
  const id = params.id;

  await fetch(URL + `/cheese/${id}/`, {
    method: "delete",
  });

  return redirect("/");
};