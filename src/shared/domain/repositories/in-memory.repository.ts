import { E } from 'node_modules/@faker-js/faker/dist/airline-CWrCIUHH'
import { Entity } from '../entities/entity'
import { RepositoryInterface } from './repository-contracts'
import { NotFoundError } from '../errors/not-found-error'

export abstract class InMemoryRepository<
  E extends Entity,
> implements RepositoryInterface<E> {
  items: E[] = []

  insert(entity: E): Promise<void> {
    this.items.push(entity)
    return Promise.resolve()
  }
  findById(id: string): Promise<E> {
    return this._get(id)
  }

  findAll(): Promise<E[]> {
    return Promise.resolve(this.items)
  }

  async update(entity: E): Promise<void> {
    await this._get(entity.id)
    const index = this.items.findIndex(item => item.id === entity.id)
    this.items[index] = entity
    return Promise.resolve()
  }

  async delete(id: string): Promise<void> {
    await this._get(id)
    const index = this.items.findIndex(item => item.id === id)
    this.items.splice(index, 1)
    return Promise.resolve()
  }

  protected async _get(id: string): Promise<E> {
    const _id = `${id}`
    const entity = this.items.find(item => item.id === _id)
    if (!entity) {
      throw new NotFoundError('Entity not found')
    }
    return Promise.resolve(entity)
  }
}
