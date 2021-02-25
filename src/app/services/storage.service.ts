import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public async set(key: string, value: any): Promise<void> {
    let objToSave = value;
    await Storage.set({
      key: key,
      value: JSON.stringify(objToSave)
    });
  }
  
  public async get(key: string): Promise<any> {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
  }
}