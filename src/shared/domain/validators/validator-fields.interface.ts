export type FieldsError = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsError
  validatedData: PropsValidated
  validate(props: PropsValidated): boolean
}
