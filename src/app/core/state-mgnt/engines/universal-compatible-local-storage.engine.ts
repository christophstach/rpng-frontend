import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { StorageEngine } from '@ngxs/storage-plugin';

export class UniversalCompatibleLocalStorageEngine implements StorageEngine {
  private readonly isPlatformServer: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isPlatformServer = isPlatformServer(platformId);
  }

  get length(): number {
    if (!this.isPlatformServer) {
      return localStorage.length;
    } else {
      return null;
    }
  }

  clear() {
    if (!this.isPlatformServer) {
      localStorage.clear();
    }
  }

  getItem(key: any): any {
    if (!this.isPlatformServer) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  key(val: number) {
    if (!this.isPlatformServer) {
      return localStorage.key(val);
    } else {
      return null;
    }
  }

  removeItem(key: any) {
    if (!this.isPlatformServer) {
      return localStorage.removeItem(key);
    } else {
      return null;
    }
  }

  setItem(key: any, val: any) {
    if (!this.isPlatformServer) {
      localStorage.setItem(key, val);
    } else {
      return null;
    }
  }
}
