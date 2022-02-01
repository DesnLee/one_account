interface Account {
  tags: string[];
  marks: string;
  type: string;
  count: number;
  createAt?: string;
}

interface Tag {
  id: number;
  name: string;
}

interface TagState {
  tagsData: Tag[];
  currentTag: Tag | undefined;
}

interface HashTable {
  [propName: string]: Account[];
}

// interface Window {
//
// }
