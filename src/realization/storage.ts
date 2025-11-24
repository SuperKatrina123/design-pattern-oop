// 数据存储接口
interface StorageService {
  save(key: string, value: any): void;
  load(key: string): any;
  remove(key: string): void;
}

// 本地存储实现
class LocalStorageService implements StorageService {
  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  load(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}

// 会话存储实现
class SessionStorageService implements StorageService {
  save(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  
  load(key: string): any {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}

// 使用时可以互换
function saveUserData(storage: StorageService, value: string) {
  storage.save('key', value); // 不关心具体实现
}


// 本地存储
const localStorageService = new LocalStorageService();
saveUserData(localStorageService, 'some value for local');

// 会话存储
const sessionStorageService = new SessionStorageService();
saveUserData(sessionStorageService, 'some value for session');