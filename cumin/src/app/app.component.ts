import { Component } from '@angular/core'
import axios from 'axios'

interface AuthHeader {
	headers: object
}

interface CurrentUserData {
	playlists: Array<object>,
	albums: Array<object>,
	tracks: Array<object>
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
	searchResults: Array<object>|null = null
	current_user_data: CurrentUserData = null
	all_playlist_tracks: Array<object>
	tabs = ['playlist', 'albums', 'tracks']
	active_tab = 'playlist'

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

	ngOnInit() {
		this.fetchAllUserData()
			.then(res => {
				this.current_user_data = {
					playlists: res[0].data.items,
					albums: res[1].data.items,
					tracks: res[2].data.items
				}
			})
			.then(() => {
				let promises = this.current_user_data.playlists.map((playlist: any) => {
					return axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, this.getAuthHeaders());
				})

				Promise.all(promises)
					.then((data) => {
						this.all_playlist_tracks = data.map(item => item.data.items)
					})
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
		this.searchResults = null
		axios.get(`${this.base_url}/artists/${artist.id}`, this.getAuthHeaders())
			.then((res) => {
				this.opponent = res.data
				window.sessionStorage.setItem('opponent', JSON.stringify(this.opponent))
			})
			.catch((e) => {
				console.error(e);
			})
	}

	async fetchAllUserData() {
		let promiseURLs = [
			axios.get(`${this.me_url}/playlists`, this.getAuthHeaders()),
			axios.get(`${this.me_url}/albums`, this.getAuthHeaders()),
			axios.get(`${this.me_url}/tracks`, this.getAuthHeaders())
		]

		let d = await Promise.all(promiseURLs)
			.then(data => data)
			.catch(e => console.error(e))

		return d
	}

	clearOpponent() {
		this.opponent = null
		this.searchResults = null
		window.sessionStorage.removeItem('opponent')
	}

	changeTab(tab: string) {
		this.active_tab = tab
	}
}
