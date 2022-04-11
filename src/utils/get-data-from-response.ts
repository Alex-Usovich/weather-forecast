import { lastValueFrom, map } from 'rxjs';

export function getDataFromResponse (httpService, url): any {
  return lastValueFrom(
    httpService.get(url)
      .pipe(
        map((response: any) => response.data)
      )
  );
}
