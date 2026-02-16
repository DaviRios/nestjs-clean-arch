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
    sut['name'] = 'new name'
    expect(sut.name).toEqual('new name')
  })

  it('Update name method', () => {
    sut.updateName('new name')
    expect(sut.name).toEqual('new name')
  })

  it('Getter email method', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it('Setter email method', () => {
    sut['email'] = 'new@email.com'
    expect(sut.email).toEqual('new@email.com')
  })

  it('Update email method', () => {
    sut.updateEmail('new@email.com')
    expect(sut.email).toEqual('new@email.com')
  })

  it('Getter password method', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it('Setter password method', () => {
    sut['password'] = 'new password'
    expect(sut.password).toEqual('new password')
  })

  it('Update password method', () => {
    sut.updatePassword('new password')
    expect(sut.password).toEqual('new password')
  })

  it('Getter createdAt method', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
