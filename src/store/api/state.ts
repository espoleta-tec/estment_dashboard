export interface ApiStateInterface {
  masterUri: string;
}

function state(): ApiStateInterface {
  return {
    masterUri: '192.168.4.1'
  };
}

export default state;
