export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const Courses: Course[] =[
    { id: 1, title: "React", instructor: "Smith", description: 'LEar '},
    { id: 2, title: "Node.js", instructor: "Casandra", description: 'Lfgg '},
    { id: 3, title: "Python", instructor: "Oleg", description: 'L4t '},
    { id: 4, title: "AI", instructor: "Vera", description: '112 '}
];
export const getCourseById = (id: number) => Courses.find(c => c.id === id);