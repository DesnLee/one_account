interface Account {
  tags: string[];
  marks: string;
  type: string;
  count: number;
  createAt?: Date;
}

interface accountModel {
  accounts: Account[];
  getData: () => Account[];
  create: (data: Account) => { code: number, message: string };
  save: () => { code: number, message: string };
}

interface tagsModel {
  data: string[];
  getData: () => string[];
  create: (name: string) => { code: number, message: string };
  save: () => { code: number, message: string };
}
