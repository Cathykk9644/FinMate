"use server";

export const signIn = async () => {
  try {
    // Mutation / Database / Make fetch request
  } catch (error) {
    console.error("Failed to sign in user:", error);
    throw error;
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    // Create new user account
  } catch (error) {
    console.error("Failed to sign up user:", error);
    throw error;
  }
};
