import axios from 'axios';
const BASE_URL = 'https://huvo-server.herokuapp.com';
const token = localStorage.getItem('hv_token');

export default class Ajax{

	// Users
	static async login(payload){
		let reponse = await axios.post(`${BASE_URL}/users/login`, payload);
		return reponse.data;
	}

	// Members
	static async createMember(payload){
		try{
			let response = await axios.post(`${BASE_URL}/members`, payload, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			if(response.msg === 'Invalid Credentials'){
				return 'error'
			}else{
				return response.data;
			}
		}catch(e){
			console.error(e);
		}

	}

	static async getAllMembers(){
		let members = await axios.get(`${BASE_URL}/members`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return members.data;
	}

	static async getMemberById(id){
		let member = await axios.get(`${BASE_URL}/members/${id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return member.data;
	}

	static async updateMember(id, payload){
		let response = await axios.put(`${BASE_URL}/members/${id}`, payload, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return response.data;
	}

	static async deleteMember(payload){
		let response = await axios.delete(`${BASE_URL}/members/${payload.id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return response.data;
	}

	// Gallery
	static async getAllGalleryImages(){
		let images = await axios.get(`${BASE_URL}/gallery`);
		return images.data;
	}

	static async createGalleryImage(payload){
		try{
			let response = await axios.post(`${BASE_URL}/gallery`, payload, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			return response.data;
		}catch (e){
			console.error('Error: ', e)
		}
	}

	static async updateGalleryImage(payload){
		try {
			let response = await axios.put(`${BASE_URL}/gallery`, payload, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			return response.data;
		} catch (e) {
			console.error(e);
		}
	}

	static async deleteGalleryImage(id){
		let response = await axios.delete(`${BASE_URL}/gallery/${id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return response.data;
	}


	// FAQs
	static async getAllQuestions(){
		try{
			let questions = await axios.get(`${BASE_URL}/questions`);
			return questions.data;
		}catch(e){
			console.error(e);
		}
	};

	static async postNewQuestion(payload){
		try{
			let response = await axios.post(`${BASE_URL}/questions`, payload, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			return response.data;
		}catch(e){
			console.error(e);
		}
	};

	static async editQuestion(payload){
		try {
			let response = await axios.put(`${BASE_URL}/questions`, payload, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			return response.data;
		} catch (e) {
			console.error(e);
		}
	}

	static async deleteQuestion(id){
		try{
			let response = axios.delete(`${BASE_URL}/questions/${id}`, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			return response.data;
		}catch (e){
			console.error(e);
		}
	}

	// Email
	static async sendEmail(payload){
		try {
			let response = axios.post(`${BASE_URL}/reachout`, payload);
			return response.data;
		} catch (e) {
			console.error(e);
		}
	}
}
