import api from './redimeApi';
import * as url from './url_helper';

const getMaterialList = () => api.get(url.GET_MATERIALS);

const postMaterial = (data: any) => api.post(url.POST_MATERIALS, data);

const putMaterial = (data: any) => api.put(url.PUT_MATERIALS, data);

const deleteMaterial = (id: number) => api.get(`${url.DELETE_MATERIALS}/${id}`);

const getCategoryList = () => api.get(url.GET_CATEGORIES);

const postCategory = (data: any) => api.post(url.POST_CATEGORY, data);

export {
  getMaterialList,
  postMaterial,
  getCategoryList,
  postCategory,
  putMaterial,
  deleteMaterial,
};
