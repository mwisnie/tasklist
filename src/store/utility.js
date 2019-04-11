export const updateState = (state, updatedFields) => {
  return {
    ...state,
    ...updatedFields
  };
};