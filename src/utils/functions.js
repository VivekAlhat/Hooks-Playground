import { v4 as uuidv4 } from "uuid";

export const ListReducerFn = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTodos = [
        ...state,
        { id: uuidv4(), title: action.payload.item, isComplete: false },
      ];
      return updatedTodos;
    }
    case "DELETE": {
      const updatedTodos = state.filter(
        (item) => item.id !== action.payload.id
      );
      return updatedTodos;
    }
    case "UPDATE": {
      const updatedTodos = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      });
      return updatedTodos;
    }
    default: {
      throw new Error(`Unsupported action: ${action.type}`);
    }
  }
};
