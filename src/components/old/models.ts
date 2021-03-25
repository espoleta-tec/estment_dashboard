export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ConfigField {
  label: string,
  state: string,
  inputLabel: string,
  value: string,
  password: boolean,
  select: boolean
}

export interface StationSettingsField {
  id: string
  label: string,
  option: string,
  value: string,
  optionLabel: string,
  valueLabel: string,
}

export const Masks: string[] = ['255.0.0.0', '255.255.0.0', '255.255.255.0'];
const WiFis: string[] = ['dota', 'espiral ap', 'wifi etecsa'];
const IpModes: string[] = ['DHCP', 'Estatica'];

export const StationNoms = {
  ssid: WiFis,
  ip: IpModes
};

