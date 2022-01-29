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
  save: () => { code: number, message: string };
}
