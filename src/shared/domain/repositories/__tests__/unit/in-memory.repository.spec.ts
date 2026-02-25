import { Entity } from '@/shared/domain/entities/entity'
import { InMemoryRepository } from '../../in-memory.repository'
import { NotFoundError } from '@/shared/domain/errors/not-found-error'

class StubEntityProps {
  name: string
  price: number
}

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemoryRepository

  beforeEach(() => {
    sut = new StubInMemoryRepository()
  })

  it('Should insert a new entity', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 })
    await sut.insert(entity)
    expect(sut.items).toHaveLength(1)
    expect(entity.toJSON()).toStrictEqual(sut.items[0].toJSON())
  })

  it('Should throw error when entity not found', async () => {
    await expect(sut.findById('fake id')).rejects.toThrow(
      new NotFoundError('Entity not found'),
    )
  })

  it('Should find an entity by id', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 })
    await sut.insert(entity)
    const output = await sut.findById(entity._id)
    expect(sut.items).toHaveLength(1)
    expect(entity.toJSON()).toStrictEqual(output.toJSON())
  })

  it('Should find all', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 })
    await sut.insert(entity)
    const output = await sut.findAll()
    expect(sut.items).toHaveLength(1)
    expect(entity.toJSON()).toStrictEqual(output[0].toJSON())
  })

  it('Should throw error on update when entity not found', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 })
    await expect(sut.update(entity)).rejects.toThrow(
      new NotFoundError('Entity not found'),
    )
  })

  it('Should update an entity', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 })
    await sut.insert(entity)
    const entityUpdated = new StubEntity(
      { name: 'test updated', price: 20 },
      entity._id,
    )
    await sut.update(entityUpdated)
    await expect(sut.findById(entity._id)).resolves.toStrictEqual(entityUpdated)
  })
})
