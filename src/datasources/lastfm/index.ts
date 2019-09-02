import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

// Local Types
export type IResourceTypes = "album" | "artist" | "track" | "user";
export type IMethodTypes = "getInfo" | "getTags" | "search" | "getSimilar" | "getTopTags" | "getTopAlbums" | "getTopArtists" | "getTopTracks" | "getLovedTracks" | "getRecentTracks" | "getFriends";

export interface ILastFMOptions {
  resource: IResourceTypes;
  method: IMethodTypes;
  [key: string]: any
}

/**
 * LastFM
 */
export class LastFM extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://ws.audioscrobbler.com/2.0";
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("api_key", process.env.LASTFM_API_KEY);
    request.params.set("format", "json");
  }

  async call({ resource, method, ...options }: ILastFMOptions) {
    const query = Object.keys(options).reduce((querystring: string, key: string, index: number): string => {
      return querystring + `${key}=${options[key]}&`;
    }, "") + `method=${resource}.${method}`;
    return this.get("", query);
  }
}
