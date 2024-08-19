export interface UserProps {
  id: number
  name: string
  email: string
  age: number
}

export class User {
  private readonly props: UserProps

  constructor(props: UserProps) {
    this.props = props
  }

  public get id(): number {
    return this.props.id
  }

  public get name(): string {
    return this.props.name
  }

  public get email(): string {
    return this.props.email
  }

  public get age(): number {
    return this.props.age
  }
}
