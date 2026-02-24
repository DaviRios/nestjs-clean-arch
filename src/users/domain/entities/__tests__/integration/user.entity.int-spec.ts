import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'

describe('UserEntity integration tests', () => {
  describe('constructor method', () => {
    it('Should throw an error when creating a user with invalid name', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        name: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        name: 'a'.repeat(256),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        name: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid email', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        email: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        email: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid password', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        password: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        password: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        password: 'a'.repeat(101),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid createdAt', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        createdAt: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        createdAt: '2023' as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })
    it('Should a valid user', () => {
      expect.assertions(0)
      const props: UserProps = {
        ...UserDataBuilder({}),
      }
      new UserEntity(props)
    })
  })

  describe('updateName method', () => {
    it('Should throw an error when update a user with invalid name', () => {
      const entity = new UserEntity(UserDataBuilder({}))
      expect(() => entity.updateName(null as any)).toThrow(
        EntityValidationError,
      )
      expect(() => entity.updateName('' as any)).toThrow(EntityValidationError)
      expect(() => entity.updateName(10 as any)).toThrow(EntityValidationError)
      expect(() => entity.updateName('a'.repeat(256))).toThrow(
        EntityValidationError,
      )
    })

    it('Should a valid user', () => {
      expect.assertions(0)
      const props: UserProps = {
        ...UserDataBuilder({}),
      }
      const entity = new UserEntity(props)
      entity.updateName('new name')
    })
  })

  describe('updatePassword method', () => {
    it('Should a invalid user using password field', () => {
      const entity = new UserEntity(UserDataBuilder({}))
      expect(() => entity.updatePassword(null as any)).toThrow(
        EntityValidationError,
      )
      expect(() => entity.updatePassword('' as any)).toThrow(
        EntityValidationError,
      )
      expect(() => entity.updatePassword(10 as any)).toThrow(
        EntityValidationError,
      )
      expect(() => entity.updatePassword('a'.repeat(101))).toThrow(
        EntityValidationError,
      )
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: UserProps = {
        ...UserDataBuilder({}),
      }

      const entity = new UserEntity(props)
      entity.updatePassword('otherPassword')
    })
  })
})
