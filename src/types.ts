export interface Base {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface User extends Base {
    username: string;
    email: string;
    password?: string;
}

export interface Project extends Base {
    title: string;
    category?: string;
    todo?: Todo[];
}

export interface Todo extends Base {
    title: string;
    description: string;
    checked: boolean;
    category?: string;
    badge?: Badge;
}

export interface Badge {
    color?: string;
    title?: string;
}