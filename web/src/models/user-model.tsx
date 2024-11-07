export type userModel = {
  id: number;
  name: string | null;
  email: string | null;
};
export type listUserModel = userModel[];
export type listIdUser = {
  id: number[];
};
export type listNameUser = {
  name: string[];
};
export type listEmailUser = {
  email: string[];
}