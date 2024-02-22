import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

  parseUrl(url: string) {
    const [urlWithoutQuery, queryString] = url.split('?');
    const query: { [key: string]: string } = {}; // Добавлен тип для query

    if (queryString) {
      queryString.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        query[key] = value;
      });
    }

    return { url: urlWithoutQuery, query };
  }

  stringifyParams(params: { [key: string]: any }) {
    const encodedParams = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join('&');
    return encodedParams;
  }
}


