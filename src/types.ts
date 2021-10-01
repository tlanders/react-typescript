export type Urgency = 'LOW'|'MED'|'HIGH';

export interface NewTodo {
    text: string,
    urgency: Urgency,
};

export interface Todo extends NewTodo {
    id: string,
    createdOn: Date,
    isComplete: boolean,
    completedOn?: Date
};