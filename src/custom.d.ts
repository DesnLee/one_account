interface Account {
  tags: string[];
  marks: string;
  type: string;
  count: number;
  createAt?: Date;
}

interface Tag {
  id: number;
  name: string;
}

interface accountModel {
  accounts: Account[];
  getData: () => Account[];
  create: (data: Account) => { code: number, message: string };
  save: () => { code: number, message: string };
}

interface tagsModel {
  data: Tag[];
  getData: () => Tag[];
  create: (name: string | null) => { code: number, message: string };
  update: (tag: Tag) => { code: number, message: string };
  delete: (id: string) => { code: number, message: string };
  save: () => { code: number, message: string };
}

interface Window {
  tagsData: Tag[];
  findTag: (id: string) => Tag | undefined;
  deleteTag: (id: string) => { code: number, message: string };
  createTag: () => { code: number, message: string };
  updateTag: (tag: Tag) => { code: number, message: string };
  accountsData: Account[];
  createAccount: (account: Account) => { code: number, message: string };
}
