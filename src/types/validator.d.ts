export interface BodyValidationItem {
  name: string
  value: any
  validator: 'required'
}

export interface BodyErrorItem {
  param: string
  message: string
}
