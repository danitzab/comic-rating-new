import axios from 'axios';

import comicApi from '@/api/comicApi';
import comicMock from '../../__mocks__/comicApiMock';

jest.mock('axios');

describe('ComicApi', () => {
  const api = comicApi;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when API call is successful', () => {
    test('Should return last comic', async () => {
      // GIVEN
      const data = comicMock.random();
      axios.get.mockResolvedValueOnce(data);

      // WHEN
      const result = await api.getLastComic();

      // THEN
      expect(axios.get).toBeCalledTimes(1);
      expect(result).toEqual(data);
    });

    test('Should return comic by id', async () => {
      // GIVEN
      const data = comicMock.random();
      axios.get.mockResolvedValueOnce(data);

      // WHEN
      const result = await api.getComicById(data.num);

      // THEN
      expect(axios.get).toBeCalledTimes(1);
      expect(result).toEqual(data);
    });
  });

  describe('when API call fails', () => {
    test('Should throw an error when getLastComic() is called', async () => {
      // GIVEN
      const error = new Error();
      axios.get.mockRejectedValueOnce(error);

      // THEN
      await expect(api.getLastComic()).rejects.toThrow(error);
    });
  });

  test('Should throw an error when getComicById() is called', async () => {
    // GIVEN
    const error = new Error();
    axios.get.mockRejectedValueOnce(error);

    // THEN
    await expect(api.getComicById(5)).rejects.toThrow(error);
  });
});
