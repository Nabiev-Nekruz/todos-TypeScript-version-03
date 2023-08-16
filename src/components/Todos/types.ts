export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}

export interface ITodoProps {
    todo: ITodo;
    onDelete: () => void;
    onComplete: (complete: boolean) => void; 
    onEdit:()=> void
}

export interface IFormTodo {
    addTodo: (event: React.FormEvent<HTMLFormElement>, title: string) => void;
}