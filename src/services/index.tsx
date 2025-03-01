import api from './redimeApi';
import * as url from './url_helper';

const getMaterialList = () => api.post(url.GET_MATERIALS, data);

const postMaterial = (data: any) => api.post(url.POST_MATERIALS, data);

const getCategoryList = () => api.post(url.GET_CATEGORIES);

const postCategory = (data: any) => api.post(url.POST_CATEGORY, data);

export { getMaterialList, postMaterial, getCategoryList, postCategory };
