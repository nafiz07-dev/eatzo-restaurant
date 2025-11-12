import supabase from "./supabase";

// the query is on the login page.
export async function login(username, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// Needed to check if the logged in user is the restaurant.
export async function getRestaurant({ queryKey }) {
  const [_key, userId] = queryKey;
  let { data: restaurant, error } = await supabase
    .from("restaurant")
    .select("user_id")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return restaurant;
}

// Logout function and the query will be on the button component
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
