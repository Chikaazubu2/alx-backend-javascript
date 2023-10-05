interface DirectorInterface {
  workFromHome (): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getToWork = () : string => 'Getting a coffee break';
  workDirectorTasks = () : string => 'Getting to director tasks'
}

class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => 
  Number(salary) < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Teacher | Director): boolean => employee instance of Director;

export const executeWork = (employee: Teacher | Director): => {
  const w = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(w);
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects): string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}
