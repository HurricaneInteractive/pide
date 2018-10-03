import { Component } from '@angular/core'
import axios from 'axios'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	private access_token = window.sessionStorage.getItem('access_token')
	private refresh_token = window.sessionStorage.getItem('refresh_token')
	private base_url: string = 'https://api.spotify.com/v1'

	current_user: object|null = JSON.parse(window.sessionStorage.getItem('current_user')) || null;
	opponent: object|null = JSON.parse(window.sessionStorage.getItem('opponent')) || null;

	constructor() {
		axios.get(`${this.base_url}/me`, {
			headers: {
				'Authorization': 'Bearer ' + this.access_token
			}
		})
		.then((res) => {
			this.current_user = res.data
			window.sessionStorage.setItem('current_user', JSON.stringify(this.current_user));
		})
		.catch((e) => {
			console.error(e)
		})
	}

	onSearch(term: string) {
		console.log('App', term);
	}
}
