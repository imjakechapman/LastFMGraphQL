import fetch from "node-fetch";
import { LASTFM_BASE_URL } from "../../config";

export type IResourceTypes = "album" | "artist" | "track" | "user";
export type IMethodTypes = "getInfo" | "getTags" | "search" | "getSimilar" | "getTopTags" | "getTopAlbums" | "getTopArtists" | "getTopTracks" | "getLovedTracks" | "getRecentTracks" | "getFriends";

export interface ILastFMOptions {
  resource: IResourceTypes;
  method: IMethodTypes;
  [key: string]: any
}

/**
 * lastFM
 * @param options: ILastFMOptions
 * @returns Promise
 */
export const lastFM = ({ resource, method, ...options}: ILastFMOptions): Promise<any> => {
  const API_KEY = process.env.LASTFM_API_KEY;

  if(!API_KEY) { throw new Error("Must provide a valid Last.fm api key" )}

  const defaultOpts: { [key: string]: any } = {
    api_key: process.env.LASTFM_API_KEY,
    format: "json"
  };

  const opts = { ...defaultOpts, ...options };
  const query = Object.keys(opts).reduce((querystring: string, key: string, index: number): string => {
    return querystring + `${key}=${opts[key]}&`;
  }, "") + `method=${resource}.${method}`;

  return new Promise(async (resolve) => {
    const res = await fetch(`${LASTFM_BASE_URL}/?${query}`);
    const data = await res.json();
    resolve(data);
  });
};
