export interface Book {
 id:              number;
 bookTitle:       string;
 edition:         string;
 bookDescription: string;
 authors:         Author[];
 isbn:            string;
}

export interface Author {
 id:       number;
 fullName: string;
}
