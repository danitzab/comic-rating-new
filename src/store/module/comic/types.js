export const COMIC = '@module/comic';

export const types = {
  PATH: `${COMIC}`,
  mutations: {
    SET_IS_LOADING: '@mutations/setIsLoading',
    SET_DATA: '@mutations/setData',
    SET_CURRENT_ID: '@mutations/setCurrentId',
    SET_LAST_ID: '@mutations/setLastId',
    SET_RATINGS: '@mutations/setRatings',
  },
  actions: {
    GET_COMIC_BY_ID: '@actions/getComicById',
    GET_LAST_COMIC: '@actions/getLastComic',
    UPDATE_RATING: '@actions/updateRating',
  },
};

export default {};
