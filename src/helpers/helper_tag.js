import {API_URL_TAG} from '../config.js'
import Auth from './auth.js'

export default class TagHelper {
	constructor() {
		
	}

    static index() {
        return  axios({
                    method: 'get',
                    url: API_URL_TAG,
                    headers: Auth.header(),
                  });
    }

    static tasks(id) {
        return  axios({
                    method: 'get',
                    url: '',
                    headers: Auth.header(),
                  });
    }

    static show(id) {
        return  axios({
                    method: 'get',
                    url: API_URL_TAG + '/' + id,
                    headers: Auth.header(),
                  });
    }
	
	static store(data) {
		return  axios({
                    method: 'post',
                    url: API_URL_TAG,
                    headers: Auth.header(),
                    data : data
                  });
	}

	static update(data) {
        const dataJson = URI.parseQuery(data);
		return  axios({
                    method: 'put',
                    url: API_URL_TAG + '/' + dataJson.id,
                    headers: Auth.header(),
                    data : data
                  });
	}

    static save(data) {
        const dataJson = URI.parseQuery(data);
        if (dataJson.id) {
            var ajaxObj = TagHelper.update(data);
        } else {
            var ajaxObj = TagHelper.store(data);
        }
        return ajaxObj;
    }


    static delete(id) {
        return axios({
            method: 'delete',
            url: API_URL_TAG + '/' + id,
            headers: Auth.header(),
        });
    }
}