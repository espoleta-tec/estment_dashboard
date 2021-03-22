export interface LoginStateInterface {
  token: string;
}

function state(): LoginStateInterface {
  return {
    token: ''
  };
}

export default state;
