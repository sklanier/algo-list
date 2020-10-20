export default (state, action) => {
  switch (action.type) {
    case "REMOVE_ALGO":
      return {
        ...state,
        algo: state.algo.filter(
          algo => algo.id !== action.payload
        )
      };
    case "ADD_ALGO":
      return {
        ...state,
        algo: [...state.algo, action.payload]
      };
    case "EDIT_ALGO":
      const updatedAlgo = action.payload;

      const updatedAlgos = state.algo.map(algo => {
        if (algo.id === updatedAlgo.id) {
          return updatedAlgo;
        }
        return algo;
      });

      return {
        ...state,
        algo: updatedAlgos
      };
    default:
      return state;
  }
};