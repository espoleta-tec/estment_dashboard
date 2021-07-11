import { ApiStateInterface } from 'src/store/api/state'

export function mapData(data: ApiStateInterface[], prop: string) {
  if (!data[0] || !data[0].date) {
    console.log('dropping it')
    return null
  }
  return data.map(d => ({ x: d.date, y: d[prop] || 0 }))
}
