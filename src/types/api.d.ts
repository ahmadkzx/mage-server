export interface API {
  id: number
  name: string
  data: string
  route: string
  description: string | null
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}
