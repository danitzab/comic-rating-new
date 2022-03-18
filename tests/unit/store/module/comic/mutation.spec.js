import { faker } from '@faker-js/faker';

import { types } from '@/store/module/comic/types';
import { mutations } from '@/store/module/comic/mutations';
import { module } from '@/store/module/comic/index';

import stateMock from '../../../../__mocks__/stateMock';

describe('Comic mutations', () => {
  const data = stateMock.random();
  let mockState;

  beforeEach(() => {
    mockState = module.state;
  });

  it('Should set isLoading state', () => {
    // GIVEN
    const payload = faker.datatype.boolean();

    // WHEN
    mutations[types.mutations.SET_IS_LOADING](mockState, payload);

    // THEN
    expect(mockState.isLoading).toStrictEqual(payload);
  });

  it('Should set data state', () => {
    // GIVEN
    const payload = data;

    // WHEN
    mutations[types.mutations.SET_DATA](mockState, payload);

    // THEN
    expect(mockState.data).toStrictEqual(payload);
  });

  it('Should set currentId state', () => {
    // GIVEN
    const payload = faker.datatype.number();

    // WHEN
    mutations[types.mutations.SET_CURRENT_ID](mockState, payload);

    // THEN
    expect(mockState.currentId).toStrictEqual(payload);
  });

  it('Should set lastId state', () => {
    // GIVEN
    const payload = faker.datatype.number();

    // WHEN
    mutations[types.mutations.SET_LAST_ID](mockState, payload);

    // THEN
    expect(mockState.lastId).toStrictEqual(payload);
  });

  it('Should set ratings state', () => {
    // GIVEN
    const payload = data;

    // WHEN
    mutations[types.mutations.SET_RATINGS](mockState, payload);

    // THEN
    expect(mockState.ratings).toStrictEqual(payload);
  });
});
