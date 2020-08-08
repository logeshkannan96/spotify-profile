import { Injectable } from '@angular/core';
import { Api } from 'src/app/api/api.enum';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private api = Api.API_URL;
  access_token;
  headers;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.access_token = this.getAccessToken();

    this.setHeaders();
  }

  getAccessToken = () => {
    // Method calls
    const setLocalAccessToken = (token) => window.localStorage.setItem('my_spotify_access_token', token);
    const setLocalRefreshToken = (token) => window.localStorage.setItem('my_spotify_refresh_token', token);
    const getLocalAccessToken = () => window.localStorage.getItem('my_spotify_access_token');
    const getLocalRefreshToken = () => window.localStorage.getItem('my_spotify_refresh_token');

    const refreshAccessToken = async () => {
      try {
        const data = await this.http.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
        const access_token = data;
        setLocalAccessToken(access_token);
        window.location.reload();
        return;
      } catch (e) {
        console.error(e);
      }
    };

    let access_token;
    let refresh_token;
    this.route.queryParams.subscribe(params => {
      access_token = params['access_token'];
      refresh_token = params['refresh_token'];
    });

    let isTrue = true;
    // If token has expired
    if (!isTrue) {
      console.warn('Access token has expired, refreshing...');
      refreshAccessToken();
    }
    const localAccessToken = getLocalAccessToken();
    const localRefreshToken = getLocalRefreshToken();

    // If there is no REFRESH token in local storage, set it as `refresh_token` from params
    if (!localRefreshToken || localRefreshToken === 'undefined') {
      setLocalRefreshToken(refresh_token);
    }

    // If there is no ACCESS token in local storage, set it and return `access_token` from params
    if (!localAccessToken || localAccessToken === 'undefined') {
      setLocalAccessToken(access_token);
      return access_token;
    }

    return localAccessToken;
  };

  setHeaders() {
    this.headers = {
      Authorization: `Bearer ${this.access_token}`,
      'Content-Type': 'application/json',
    }
  }

  /**
   * Get Current User's Profile
   * https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
   */
  getUserInfo() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me`, { headers });
  }

  /**
   * Get User's Followed Artists
   * https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/
   */
  getFollowingData(limit: any) {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/following?type=artist&limit=${limit}`, { headers })
  }

  /**
   * Get a List of Current User's Playlists
   * https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
   */
  getCurrentUserPlaylists() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/playlists`, { headers });
  }

  /**
   * Get a List of Tracks from Selected Playlist
   * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks
   */
  getTracksFromPlayList(playlist_id: any) {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/playlists/${playlist_id}/tracks`, { headers })
  }

  /**
   * Get a Playlist
   * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist
   */
  getAPlayList(playlist_id: any) {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/playlists/${playlist_id}`, { headers })
  }

  /**
   * Get a User's Top Tracks
   * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
   */
  getTopTracksShort() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/top/tracks?limit=50&time_range=short_term`, { headers });
  }

  getTopTracksMedium() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/top/tracks?limit=50&time_range=medium_term`, {
      headers,
    });
  }

  getTopTracksLong() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/top/tracks?limit=50&time_range=long_term`, { headers });
  }

  /**
   * Get a User's Top Artists
   * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
   */
  getTopArtistsShort() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/top/artists?limit=50&time_range=short_term`, {
      headers,
    });
  }

  getTopArtistsMedium() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/top/artists?limit=10&time_range=medium_term`, {
      headers,
    });
  }

  getTopArtistsLong() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/top/artists?limit=50&time_range=long_term`, { headers });
  }

  /**
   * Get an artist
   * https://developer.spotify.com/documentation/web-api/reference/artists/get-artist
   */
  getAnArtist(artist_id: any) {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/artists/${artist_id}`, { headers });
  }

  /**
   * Get Top Tracks of An Artist
   * https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks
   */
  getTopTracksOfArtist(id: any) {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/artists/${id}/top-tracks?country=ES`, { headers })
  }

  /**
   * Get Saved Tracks of User
   * https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-tracks
   */
  getSavedTracks() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/tracks`, { headers })
  }

  /**
   * Get Recently Played Tracks of the User
   * https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played
   */
  getRecentltPlayed() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/player/recently-played`, { headers })
  }

  /**
   * Get User's Playlists
   * https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists
   */
  getUsersPlaylists() {
    const headers = this.headers;
    return this.http.get(`${this.api}/v1/me/playlists`, { headers })
  }
}