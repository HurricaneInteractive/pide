import { Component } from '@angular/core'
import axios from 'axios'

interface AuthHeader {
	headers: object
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	private access_token = window.sessionStorage.getItem('access_token')
	private refresh_token = window.sessionStorage.getItem('refresh_token')
	private base_url: string = 'https://api.spotify.com/v1'
	private me_url: string = this.base_url + '/me'
	private search_url: string = this.base_url + '/search'

	current_user: object|null = JSON.parse(window.sessionStorage.getItem('current_user')) || null
	opponent: object|null = JSON.parse(window.sessionStorage.getItem('opponent')) || null

	searchResults: Array<object>|null = null;

	constructor() {
		axios.get(`${this.me_url}`, this.getAuthHeaders())
		.then((res) => {
			this.current_user = res.data
			window.sessionStorage.setItem('current_user', JSON.stringify(this.current_user));
		})
		.catch((e) => {
			console.error(e)
		})
	}

	getAuthHeaders() : AuthHeader {
		return {
			headers: {
				'Authorization': 'Bearer ' + this.access_token
			}
		}
	}

	onArtistSearch(term: string) {
		axios.get(`${this.search_url}?q=${encodeURIComponent(term + '*')}&type=artist`, this.getAuthHeaders())
			.then((res) => {
				console.log('Res', res)
				this.searchResults = res.data.artists.items
			})
			.catch((e) => {
				console.error(e)
			})
	}

	onArtistSelect(artist: any) {
		this.opponent = artist
		axios.get(`${this.base_url}/artists/${artist.id}`, this.getAuthHeaders())
			.then((res) => {
				this.opponent = res.data
			})
			.catch((e) => {
				console.error(e);
			})
	}
}
