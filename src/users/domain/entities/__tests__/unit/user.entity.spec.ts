import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Getter name method', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it('Setter name method', () => {
    sut.updateName('new name')
    expect(sut.name).toEqual('new name')
  })

  it('Getter email method', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it('Setter email method', () => {
    sut.updateEmail('new@email.com')
    expect(sut.email).toEqual('new@email.com')
  })

  it('Getter password method', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it('Setter email method', () => {
    sut.updateEmail('123')
    expect(sut.email).toEqual('123')
  })

  it('Getter createdAt method', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
