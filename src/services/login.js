import supabase from "./supabase";

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

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
