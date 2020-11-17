import * as ActionTypes from "redux/Types";

// export const NavbarToggle = (navbarToggle: ActionTypes.NAVBAR_TOGGLE) => {
//   return {
//     type: ActionTypes.NAVBAR_TOGGLE,
//     payload: { navbarToggle },
//   };
// };

export interface ToggleNavbar {
  type: ActionTypes.TYPE_NAVBAR_TOGGLE;
  payload: boolean;
}

// export const toggleNavbar: ToggleNavbar = (type: "", payload: true) => {
//   return { type: ActionTypes.NAVBAR_TOGGLE, payload: navbarToggle };
// };

export const toggleNavbar = (navbarToggle: boolean): ToggleNavbar => {
  return {
    type: ActionTypes.NAVBAR_TOGGLE,
    payload: navbarToggle,
  };
};

export type AllActions = ToggleNavbar;
