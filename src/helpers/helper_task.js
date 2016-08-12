import {API_URL_TASK,API_URL_TASKLIST_TASKS_FN} from '../config.js'
import Auth from './auth.js'

export default class TaskHelper {
	constructor() {
		
	}

    static index() {
        return  axios({
                    method: 'get',
                    url: API_URL_TASK,
                    headers: Auth.header(),
                  });
    }

    static show(id) {
        return  axios({
                    method: 'get',
                    url: API_URL_TASK + '/' + id,
                    headers: Auth.header(),
                  });
    }
	
	static store({org_title=null}) {
		return  axios({
                    method: 'post',
                    url: API_URL_TASK,
                    headers: Auth.header(),
                    data : data
                  });
	}

	static update(data) {
		return  axios({
                    method: 'put',
                    url: API_URL_TASK,
                    headers: Auth.header(),
                    data : data
                  });
	}
}