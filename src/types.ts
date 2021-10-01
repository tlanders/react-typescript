export interface Todo {
    text: string,
    id: string,
    createdOn: Date,
    isComplete: boolean,
    urgency: 'LOW'|'MED'|'HIGH',
    completedOn?: Date
};