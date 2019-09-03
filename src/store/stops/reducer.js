import { ACTION_CHANGE_STOPS } from "../../constants";

const initialState = {
  checkboxes: {
    checkbox0: {
      id: 0,
      stops: "all",
      isEnabled: true,
      labelText: "Все"
    },

    checkbox1: {
      id: 1,
      stops: 0,
      isEnabled: true,
      labelText: "Без пересадок"
    },

    checkbox2: {
      id: 2,
      stops: 1,
      isEnabled: true,
      labelText: "1 пересадка"
    },

    checkbox3: {
      id: 3,
      stops: 2,
      isEnabled: true,
      labelText: "2 пересадки"
    },

    checkbox4: {
      id: 4,
      stops: 3,
      isEnabled: true,
      labelText: "3 пересадки"
    }
  }
};

export const stopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_STOPS:
      let newState = {};

      if (action.payload.only === true) {
        newState = Object.assign({}, state.checkboxes);
        for (let i in newState) {
          newState[i].isEnabled = false;
        }

        newState[action.payload.clickedButton].isEnabled = true;
        newState = {
          checkboxes: {
            ...newState
          }
        };
      } else if (
        action.payload.clickedButton === "checkbox0" &&
        state.checkboxes.checkbox0.isEnabled === false
      ) {
        newState = Object.assign({}, state, {
          checkboxes: {
            ...state.checkboxes
          }
        });
        for (let i in newState.checkboxes) {
          newState.checkboxes[i].isEnabled = true;
        }
      } else if (
        action.payload.clickedButton === "checkbox0" &&
        state.checkboxes.checkbox0.isEnabled === true
      ) {
        newState = Object.assign({}, state.checkboxes);
        for (let i in newState) {
          newState[i].isEnabled = false;
        }
        newState = {
          checkboxes: {
            ...newState
          }
        };
      } else if (
        action.payload.clickedButton !== "checkbox0" &&
        state.checkboxes.checkbox0.isEnabled === true
      ) {
        newState = Object.assign({}, state, {
          checkboxes: {
            ...state.checkboxes,
            checkbox0: {
              id: state.checkboxes.checkbox0.id,
              isEnabled: false,
              labelText: state.checkboxes.checkbox0.labelText,
              stops: state.checkboxes.checkbox0.stops
            },
            [action.payload.clickedButton]: {
              id: state.checkboxes[action.payload.clickedButton].id,
              isEnabled: !state.checkboxes[action.payload.clickedButton]
                .isEnabled,
              labelText:
                state.checkboxes[action.payload.clickedButton].labelText,
              stops: state.checkboxes[action.payload.clickedButton].stops
            }
          }
        });
      } else if (
        action.payload.clickedButton !== "checkbox0" &&
        state.checkboxes.checkbox0.isEnabled === false
      ) {
        newState = Object.assign({}, state, {
          checkboxes: {
            ...state.checkboxes,
            [action.payload.clickedButton]: {
              id: state.checkboxes[action.payload.clickedButton].id,
              isEnabled: !state.checkboxes[action.payload.clickedButton]
                .isEnabled,
              labelText:
                state.checkboxes[action.payload.clickedButton].labelText,
              stops: state.checkboxes[action.payload.clickedButton].stops
            }
          }
        });
        let enabledCheckBoxCount = 0;
        let CheckBoxCount = 0;
        for (let i in newState.checkboxes) {
          if (newState.checkboxes[i].isEnabled === true) {
            enabledCheckBoxCount += 1;
          }
          CheckBoxCount += 1;
        }

        if (enabledCheckBoxCount === CheckBoxCount - 1) {
          newState.checkboxes.checkbox0.isEnabled = true;
        }
      } else {
        newState = Object.assign({}, state, {
          checkboxes: {
            ...state.checkboxes,
            [action.payload.clickedButton]: {
              id: state.checkboxes[action.payload.clickedButton].id,
              isEnabled: !state.checkboxes[action.payload.clickedButton]
                .isEnabled,
              labelText:
                state.checkboxes[action.payload.clickedButton].labelText,
              stops: state.checkboxes[action.payload.clickedButton].stops
            }
          }
        });
      }

      return {
        ...newState
      };

    default:
      return state;
  }
};
