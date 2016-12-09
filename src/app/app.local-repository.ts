export class LocalRepository {
  private static instance: LocalRepository;
  private static readonly STORAGE_KEY: string = 'perd_v1';

  private localData: any;

  private constructor() {
    let localData:any = localStorage.getItem(LocalRepository.STORAGE_KEY);

    if (localData) {
      try {
        localData = JSON.parse(localData);
      } catch (e) {
        localData = {};
      }
    } else {
      localData = {};
    }

    if (!localData.tags) {
      localData.tags = [];
    }

    if (!localData.words) {
      localData.words = [];
    }

    this.localData = localData;
  }

  static getInstance() {
    if (!LocalRepository.instance) {
      LocalRepository.instance = new LocalRepository();
    }
    return LocalRepository.instance;
  }

  private updateLocalData() {
    localStorage.setItem(LocalRepository.STORAGE_KEY, JSON.stringify(this.localData));
  }

  public addTag(tagName: string) {
    if (!this.localData.tags.find(tag => tag.name === tagName)) {
      this.localData.tags.push({ name: tagName, wordCount: 0 });
      this.updateLocalData();
    }

    return Promise.resolve();
  }

  public getTags() {
    return Promise.resolve(this.localData.tags);
  }
}
