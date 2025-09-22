import './App.css'
import BottomBar from './components/BottomBar'
import BoxSelector from './components/BoxSelector';
import TextBox from './components/TextBox'

function App() {
  const navigationItems = [
    { title: "Home", iconClass: "fa fa-home", isActive: true, onClick: () => console.log("Home clicked") },
    { title: "Tasks", iconClass: "fa fa-tasks", onClick: () => console.log("Tasks clicked") },
    { title: "Goals", iconClass: "fa fa-rocket" },
    { title: "Stats", iconClass: "fa fa-chart-bar" }
  ];
  return (
    <>
      <div className="app-main">
        <TextBox placeholder="Search tasks..." value="" onChange={(val) => console.log(val)} />
        <BoxSelector options={["All", "Active", "Completed"]} selectedOption="All" onSelect={(option) => console.log(option)} />

      </div>
      <BottomBar navigationItems={navigationItems} />
    </>
  )
}

export default App
