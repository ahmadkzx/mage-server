export type BodyValidationItem = {
  name: string
  value: any
  validator: 'required'
}

export type BodyErrorItem = {
  param: string
  messages: Array<string>
}

const validators = {
  required: (value: string) => value?.trim().length > 0,
}

export function validate(params: Array<BodyValidationItem>) {
  const errors: Array<BodyErrorItem> = []
  params.forEach((param) => {
    if (!validators[param.validator](param.value)) {
      errors.push({ param: param.name, messages: [`${param.name} is required`] })
    }
  })

  if (errors.length > 0) {
    throw { type: 'Validation', errors }
  }
}
