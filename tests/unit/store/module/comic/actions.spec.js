import { faker } from '@faker-js/faker';

import comicApi from '@/api/comicApi';
import { types } from '@/store/module/comic/types';
import { actions } from '@/store/module/comic/actions';

import comicMock from '../../../../__mocks__/comicApiMock';

jest.mock('@/api/comicApi');
const commit = jest.fn();
const state = jest.fn();

describe.only('Comic actions', () => {
  const api = comicApi;
  const data = comicMock.random();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should dispach getLasComic()', async () => {
    // GIVEN
    api.getLastComic.mockResolvedValueOnce({ data });

    // WHEN
    await actions[types.actions.GET_LAST_COMIC]({ commit });

    // THEN
    expect(api.getLastComic).toBeCalledTimes(1);
    expect(api.getComicById).toBeCalledTimes(0);
    expect(commit).toBeCalledTimes(5);
  });

  it('Should dispach getLasComic() with error', async () => {
    // GIVEN
    const error = new Error();
    api.getLastComic.mockRejectedValueOnce(error);

    // WHEN
    await actions[types.actions.GET_LAST_COMIC]({ commit });

    // THEN
    expect(api.getLastComic).toBeCalledTimes(1);
    expect(commit).toBeCalledTimes(2);
  });

  it('Should dispach getComicById()', async () => {
    // GIVEN
    api.getComicById.mockResolvedValueOnce({ data });

    // WHEN
    await actions[types.actions.GET_COMIC_BY_ID]({ commit }, data.num);

    // THEN
    expect(api.getLastComic).toBeCalledTimes(0);
    expect(api.getComicById).toBeCalledTimes(1);
    expect(commit).toBeCalledTimes(4);
  });

  it('Should dispach getComicById() with error', async () => {
    // GIVEN
    const error = new Error();
    api.getComicById.mockRejectedValueOnce(error);

    // WHEN
    await actions[types.actions.GET_COMIC_BY_ID]({ commit }, data.num);

    // THEN
    expect(api.getComicById).toBeCalledTimes(1);
    expect(commit).toBeCalledTimes(2);
  });

  it('Should dispach update rating', async () => {
    // GIVEN
    const rating = faker.datatype.number({ min: 1, max: 5 });

    // WHEN
    await actions[types.actions.UPDATE_RATING]({ commit, state }, { data, rating });

    // THEN
    expect(commit).toBeCalledTimes(1);
  });
});
