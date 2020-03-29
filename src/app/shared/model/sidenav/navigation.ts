export interface Navigation {
    title: string;
    items: Item[];
}

export interface Item {
    title: string;
    icon: string;
    route: string;
}