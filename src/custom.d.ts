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

interface TagState {
  tagsData: Tag[];
  currentTag: Tag | undefined;
}

// interface Window {
//
// }
