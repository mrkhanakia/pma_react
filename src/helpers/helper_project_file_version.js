import {
        API_URL_PROJECT_FILE_VERSION, 
    } from '../config.js'

import Auth from './auth.js'

export default class ProjectFileVersionHelper {
    constructor() {

    }

    // static index(project_id) {
    //     return axios({
    //         method: 'get',
    //         url: API_URL_PROJECT_FILE,
    //         headers: Auth.header(),
    //         params: {
    //             project_id : project_id
    //         },
    //     });
    // }


    // static index_not_assigned(project_id) {
    //     return axios({
    //         method: 'get',
    //         url: API_URL_PROJECT_FILE_NOT_ASSIGNED,
    //         headers: Auth.header(),
    //         params: {
    //             project_id : project_id
    //         },
    //     });
    // }

    // static show(id) {
    //     return axios({
    //         method: 'get',
    //         url: API_URL_PROJECT_FILE + '/' + id,
    //         headers: Auth.header(),
    //     });
    // }
    
    // static store(data) {
    //     return axios({
    //         method: 'post',
    //         url: API_URL_PROJECT_FILE,
    //         headers: Auth.header(),
    //         data: data
    //     });
    // }

    // static update(data) {
    //     const dataJson = URI.parseQuery(data);
    //     return axios({
    //         method: 'put',
    //         url: API_URL_PROJECT_FILE + '/' + dataJson.id,
    //         headers: Auth.header(),
    //         data: data
    //     });
    // }

    // static save(data) {
    //     const dataJson = URI.parseQuery(data);
    //     if (dataJson.id) {
    //         var ajaxObj = ProjectFileHelper.update(data);
    //     } else {
    //         var ajaxObj = ProjectFileHelper.store(data);
    //     }
    //     return ajaxObj;
    // }

    static delete(id) {
        return axios({
            method: 'delete',
            url: API_URL_PROJECT_FILE_VERSION + '/' + id,
            headers: Auth.header(),
        });
    }

    // static deleteMultiple(data) {
    //     return axios({
    //         method: 'post',
    //         url: API_URL_PROJECT_FILE_VERSION + '/delete_multiple',
    //         data: data,
    //         headers: Auth.header(),
    //     });
    // }
}

