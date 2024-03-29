import { AddTodo } from "./components/AddTodo";
import { FilterTodos } from "./components/FilterTodos";
import { Header } from "./components/Header";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { ListTodos } from "./components/ListTodos";
import { ThemeToggle } from "./components/ThemeToggle";
import { TodosCount } from "./components/TodosCount";

const App = () => {
    return (
        <LayoutWrapper>
            <Header />
            <AddTodo />
            <ListTodos />
            <FilterTodos />
            <TodosCount />
            <ThemeToggle />
        </LayoutWrapper> 
    );
};

export default App;
