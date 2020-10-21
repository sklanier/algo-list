export default (state, action) => {
  switch (action.type) {
    case "REMOVE_ALGO":
      return {
        ...state,
        algos: state.algos.filter(
          algo => algo.id !== action.payload
        )
      };
    case "ADD_ALGO":
      return {
        ...state,
        algos: [...state.algos, action.payload]
      };
    case "EDIT_ALGO":
      const updatedAlgo = action.payload;

      const updatedAlgos = state.algos.map(algo => {
        if (algo.id === updatedAlgo.id) {
          return updatedAlgo;
        }
        return algo;
      });

      return {
        ...state,
        algos: updatedAlgos
      };
    default:
      return state;
  }
};